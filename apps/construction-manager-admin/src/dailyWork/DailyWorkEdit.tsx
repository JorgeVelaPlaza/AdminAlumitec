import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const DailyWorkEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ConstructionID" source="constructionId" />
        <TextInput label="EmployeeID" source="employeeId" />
        <DateTimeInput label="WorkDate" source="workDate" />
        <NumberInput label="WorkHours" source="workHours" />
      </SimpleForm>
    </Edit>
  );
};
