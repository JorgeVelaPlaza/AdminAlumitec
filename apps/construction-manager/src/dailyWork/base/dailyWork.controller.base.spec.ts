import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DailyWorkController } from "../dailyWork.controller";
import { DailyWorkService } from "../dailyWork.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  constructionId: "exampleConstructionId",
  createdAt: new Date(),
  employeeId: "exampleEmployeeId",
  id: "exampleId",
  updatedAt: new Date(),
  workDate: new Date(),
  workHours: 42.42,
};
const CREATE_RESULT = {
  constructionId: "exampleConstructionId",
  createdAt: new Date(),
  employeeId: "exampleEmployeeId",
  id: "exampleId",
  updatedAt: new Date(),
  workDate: new Date(),
  workHours: 42.42,
};
const FIND_MANY_RESULT = [
  {
    constructionId: "exampleConstructionId",
    createdAt: new Date(),
    employeeId: "exampleEmployeeId",
    id: "exampleId",
    updatedAt: new Date(),
    workDate: new Date(),
    workHours: 42.42,
  },
];
const FIND_ONE_RESULT = {
  constructionId: "exampleConstructionId",
  createdAt: new Date(),
  employeeId: "exampleEmployeeId",
  id: "exampleId",
  updatedAt: new Date(),
  workDate: new Date(),
  workHours: 42.42,
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("DailyWork", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DailyWorkService,
          useValue: service,
        },
      ],
      controllers: [DailyWorkController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /dailyWorks", async () => {
    await request(app.getHttpServer())
      .post("/dailyWorks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        workDate: CREATE_RESULT.workDate.toISOString(),
      });
  });

  test("GET /dailyWorks", async () => {
    await request(app.getHttpServer())
      .get("/dailyWorks")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          workDate: FIND_MANY_RESULT[0].workDate.toISOString(),
        },
      ]);
  });

  test("GET /dailyWorks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dailyWorks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /dailyWorks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/dailyWorks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        workDate: FIND_ONE_RESULT.workDate.toISOString(),
      });
  });

  test("POST /dailyWorks existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/dailyWorks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        workDate: CREATE_RESULT.workDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/dailyWorks")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
