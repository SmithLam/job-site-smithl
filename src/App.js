import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Jobs from "./Page/Jobs";
import Login from "./Page/Login";
import Details from "./Page/Details";

function App() {
  // let [user, setUser] = useState(true); //if user = true? login : not login in
  let state = useSelector((state) => state);

  const ProtectedRoute = (props) => {
    //if user is login, then show the detail page
    //if user is not login then show the login page
    if (state.user.isAuthenticated === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const FourOhFourPage = () => {
    return (
      <div id="404page">
        <h1>404 Not Found</h1>
      </div>
    );
  };

  return (
    <div>
      <Switch>
        <ProtectedRoute
          path="/jobs/:id"
          render={(props) => <Details {...props} />}
        />
        <Route exact={true} path="/jobs/:id" component={Details} />
        <Route exact={true} path="/jobs" component={Jobs} />
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/" component={Jobs} />
        <Route path="*" component={FourOhFourPage} />
      </Switch>
    </div>
  );
}

export default App;
