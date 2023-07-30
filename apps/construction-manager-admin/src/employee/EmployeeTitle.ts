import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "lastName";

export const EmployeeTitle = (record: TEmployee): string => {
  return record.lastName || String(record.id);
};
