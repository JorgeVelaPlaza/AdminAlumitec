/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateConstructionArgs } from "./CreateConstructionArgs";
import { UpdateConstructionArgs } from "./UpdateConstructionArgs";
import { DeleteConstructionArgs } from "./DeleteConstructionArgs";
import { ConstructionCountArgs } from "./ConstructionCountArgs";
import { ConstructionFindManyArgs } from "./ConstructionFindManyArgs";
import { ConstructionFindUniqueArgs } from "./ConstructionFindUniqueArgs";
import { Construction } from "./Construction";
import { ConstructionService } from "../construction.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Construction)
export class ConstructionResolverBase {
  constructor(
    protected readonly service: ConstructionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Construction",
    action: "read",
    possession: "any",
  })
  async _constructionsMeta(
    @graphql.Args() args: ConstructionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Construction])
  @nestAccessControl.UseRoles({
    resource: "Construction",
    action: "read",
    possession: "any",
  })
  async constructions(
    @graphql.Args() args: ConstructionFindManyArgs
  ): Promise<Construction[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Construction, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Construction",
    action: "read",
    possession: "own",
  })
  async construction(
    @graphql.Args() args: ConstructionFindUniqueArgs
  ): Promise<Construction | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Construction)
  @nestAccessControl.UseRoles({
    resource: "Construction",
    action: "create",
    possession: "any",
  })
  async createConstruction(
    @graphql.Args() args: CreateConstructionArgs
  ): Promise<Construction> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Construction)
  @nestAccessControl.UseRoles({
    resource: "Construction",
    action: "update",
    possession: "any",
  })
  async updateConstruction(
    @graphql.Args() args: UpdateConstructionArgs
  ): Promise<Construction | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Construction)
  @nestAccessControl.UseRoles({
    resource: "Construction",
    action: "delete",
    possession: "any",
  })
  async deleteConstruction(
    @graphql.Args() args: DeleteConstructionArgs
  ): Promise<Construction | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
