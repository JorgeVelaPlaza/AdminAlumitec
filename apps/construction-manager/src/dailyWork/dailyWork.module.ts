import { Module } from "@nestjs/common";
import { DailyWorkModuleBase } from "./base/dailyWork.module.base";
import { DailyWorkService } from "./dailyWork.service";
import { DailyWorkController } from "./dailyWork.controller";
import { DailyWorkResolver } from "./dailyWork.resolver";

@Module({
  imports: [DailyWorkModuleBase],
  controllers: [DailyWorkController],
  providers: [DailyWorkService, DailyWorkResolver],
  exports: [DailyWorkService],
})
export class DailyWorkModule {}
