import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmployeeWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  middleName?: StringNullableFilter;
  name?: StringFilter;
  phoneNumber?: StringNullableFilter;
};
