import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Switch, Route, Redirect} from 'react-router-dom'
import Jobs from './Page/Jobs'
import Login from './Page/Login'
import Details from './Page/Details'


function App() {

  let [user, setUser] = useState(true) //if user = true? login : not login in

  const ProtectedRoute = (props) => {

    //if user is login, then show the detail page
    //if user is not login then show the login page
    if (user === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };


  return (
    <div>

 <Switch>
        <ProtectedRoute path="/jobs/:id" render={(props)=>< Details {...props}/>}/>
        <Route path="/jobs/:id" component={Details}/>
        <Route path="/jobs" component={Jobs}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Jobs}/>
 </Switch>

    </div>
  );
}

export default App;
