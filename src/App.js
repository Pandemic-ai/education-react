import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Main from "./VIews/Main";
import Dashboard from "./VIews/Dasboard";
import Login from "./Auth/Login";
import Header from "./Layout/Header";
import "./App.css";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={innerProps =>
        localStorage.getItem("Token") ? (
          <Component {...innerProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback="loading">
          <BrowserRouter>
            <Header loggedIn={localStorage.getItem("Token") != null} />

            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/login/" component={Login} />
              <PrivateRoute path="/dashboard/" component={Dashboard} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </div>
    );
  }
}

export default App;
