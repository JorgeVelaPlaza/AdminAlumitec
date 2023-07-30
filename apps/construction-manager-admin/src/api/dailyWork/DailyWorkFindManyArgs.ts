import { DailyWorkWhereInput } from "./DailyWorkWhereInput";
import { DailyWorkOrderByInput } from "./DailyWorkOrderByInput";

export type DailyWorkFindManyArgs = {
  where?: DailyWorkWhereInput;
  orderBy?: Array<DailyWorkOrderByInput>;
  skip?: number;
  take?: number;
};
