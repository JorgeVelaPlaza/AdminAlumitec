import { DailyWork as TDailyWork } from "../api/dailyWork/DailyWork";

export const DAILYWORK_TITLE_FIELD = "constructionId";

export const DailyWorkTitle = (record: TDailyWork): string => {
  return record.constructionId || String(record.id);
};
