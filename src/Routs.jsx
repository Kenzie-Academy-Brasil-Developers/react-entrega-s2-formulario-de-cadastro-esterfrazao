import Form from "./pages/Form";
import Home from "./pages/Home";

import { Main } from "./App";

import { Switch, Route } from "react-router-dom";

const Routs = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main>
          <Form />
        </Main>
      </Route>
      <Route exact path="/home/:user">
        <Main>
          <Home />
        </Main>
      </Route>
    </Switch>
  );
};

export default Routs;
