import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DailyWorkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ConstructionID" source="constructionId" />
        <TextInput label="EmployeeID" source="employeeId" />
        <DateTimeInput label="WorkDate" source="workDate" />
        <NumberInput label="WorkHours" source="workHours" />
      </SimpleForm>
    </Create>
  );
};
