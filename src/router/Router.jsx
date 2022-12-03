import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templetes/DefaultLayout";
import { HeaderOnly } from "../components/templetes/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
