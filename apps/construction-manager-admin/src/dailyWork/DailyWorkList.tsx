import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DailyWorkList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DailyWorks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ConstructionID" source="constructionId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="EmployeeID" source="employeeId" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WorkDate" source="workDate" />
        <TextField label="WorkHours" source="workHours" />
      </Datagrid>
    </List>
  );
};
