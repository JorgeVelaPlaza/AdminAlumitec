import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DailyWorkService } from "./dailyWork.service";
import { DailyWorkControllerBase } from "./base/dailyWork.controller.base";

@swagger.ApiTags("dailyWorks")
@common.Controller("dailyWorks")
export class DailyWorkController extends DailyWorkControllerBase {
  constructor(
    protected readonly service: DailyWorkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
