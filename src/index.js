import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import AddUser from "./AddUser";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";
import ViewUsers from "./ViewUser";
import { UsersProvider } from "./userProvider.js";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/list" />} />
        <Route path="/list">
          <ViewUsers />
        </Route>
        <Route path="/add">
          <AddUser />
        </Route>
        <Route path="/edit/:id">
          <EditUser />
        </Route>
        <Route path="/delete/{id}">
          <DeleteUser />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <UsersProvider>
      <App />
    </UsersProvider>
  </Router>,
  document.querySelector("#root")
);
