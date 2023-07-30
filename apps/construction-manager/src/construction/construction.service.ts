import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConstructionServiceBase } from "./base/construction.service.base";

@Injectable()
export class ConstructionService extends ConstructionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
