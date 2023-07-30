import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  middleName?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
