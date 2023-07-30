import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { ConstructionList } from "./construction/ConstructionList";
import { ConstructionCreate } from "./construction/ConstructionCreate";
import { ConstructionEdit } from "./construction/ConstructionEdit";
import { ConstructionShow } from "./construction/ConstructionShow";
import { DailyWorkList } from "./dailyWork/DailyWorkList";
import { DailyWorkCreate } from "./dailyWork/DailyWorkCreate";
import { DailyWorkEdit } from "./dailyWork/DailyWorkEdit";
import { DailyWorkShow } from "./dailyWork/DailyWorkShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Construction Manager"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Construction"
          list={ConstructionList}
          edit={ConstructionEdit}
          create={ConstructionCreate}
          show={ConstructionShow}
        />
        <Resource
          name="DailyWork"
          list={DailyWorkList}
          edit={DailyWorkEdit}
          create={DailyWorkCreate}
          show={DailyWorkShow}
        />
      </Admin>
    </div>
  );
};

export default App;
