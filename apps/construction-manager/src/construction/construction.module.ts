import { Module } from "@nestjs/common";
import { ConstructionModuleBase } from "./base/construction.module.base";
import { ConstructionService } from "./construction.service";
import { ConstructionController } from "./construction.controller";
import { ConstructionResolver } from "./construction.resolver";

@Module({
  imports: [ConstructionModuleBase],
  controllers: [ConstructionController],
  providers: [ConstructionService, ConstructionResolver],
  exports: [ConstructionService],
})
export class ConstructionModule {}
