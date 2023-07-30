import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type DailyWorkWhereInput = {
  constructionId?: StringFilter;
  employeeId?: StringFilter;
  id?: StringFilter;
  workDate?: DateTimeFilter;
  workHours?: FloatFilter;
};
