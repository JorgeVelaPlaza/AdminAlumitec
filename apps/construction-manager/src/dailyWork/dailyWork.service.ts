import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DailyWorkServiceBase } from "./base/dailyWork.service.base";

@Injectable()
export class DailyWorkService extends DailyWorkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
