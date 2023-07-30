import { SortOrder } from "../../util/SortOrder";

export type DailyWorkOrderByInput = {
  constructionId?: SortOrder;
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  workDate?: SortOrder;
  workHours?: SortOrder;
};
