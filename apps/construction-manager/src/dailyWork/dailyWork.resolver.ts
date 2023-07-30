import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DailyWorkResolverBase } from "./base/dailyWork.resolver.base";
import { DailyWork } from "./base/DailyWork";
import { DailyWorkService } from "./dailyWork.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DailyWork)
export class DailyWorkResolver extends DailyWorkResolverBase {
  constructor(
    protected readonly service: DailyWorkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
