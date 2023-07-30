import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ConstructionWhereInput = {
  address?: StringFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  property?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
