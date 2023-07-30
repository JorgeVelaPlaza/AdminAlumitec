import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConstructionService } from "./construction.service";
import { ConstructionControllerBase } from "./base/construction.controller.base";

@swagger.ApiTags("constructions")
@common.Controller("constructions")
export class ConstructionController extends ConstructionControllerBase {
  constructor(
    protected readonly service: ConstructionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
