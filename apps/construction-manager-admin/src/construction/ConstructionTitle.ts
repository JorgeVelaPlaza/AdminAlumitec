import { Construction as TConstruction } from "../api/construction/Construction";

export const CONSTRUCTION_TITLE_FIELD = "name";

export const ConstructionTitle = (record: TConstruction): string => {
  return record.name || String(record.id);
};
