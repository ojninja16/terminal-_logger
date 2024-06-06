import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TerminalList } from "./terminal/TerminalList";
import { TerminalCreate } from "./terminal/TerminalCreate";
import { TerminalEdit } from "./terminal/TerminalEdit";
import { TerminalShow } from "./terminal/TerminalShow";
import { LogEntryList } from "./logEntry/LogEntryList";
import { LogEntryCreate } from "./logEntry/LogEntryCreate";
import { LogEntryEdit } from "./logEntry/LogEntryEdit";
import { LogEntryShow } from "./logEntry/LogEntryShow";
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
        title={"TerminalLogger"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Terminal"
          list={TerminalList}
          edit={TerminalEdit}
          create={TerminalCreate}
          show={TerminalShow}
        />
        <Resource
          name="LogEntry"
          list={LogEntryList}
          edit={LogEntryEdit}
          create={LogEntryCreate}
          show={LogEntryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
