import "./App.css";

import { Switch, Route } from "react-router-dom";

import Form from "./pages/Form";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
