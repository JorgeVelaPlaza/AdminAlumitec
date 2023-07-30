import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DailyWorkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ConstructionID" source="constructionId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="EmployeeID" source="employeeId" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WorkDate" source="workDate" />
        <TextField label="WorkHours" source="workHours" />
      </SimpleShowLayout>
    </Show>
  );
};
