import React, { useState } from "react";
import Navigation from "./components/NavigationBar";
import JobLogo from "./components/job-logo2.png";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let history = useHistory();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
        console.log("what is state.jobID in login", state.jobID);
    let user = { email: email, password: password };
    dispatch({ type: "LOGIN", payload: user });
    if (state.jobID !==  null) {
      history.push(`/jobs/${state.jobID}`);
    } else {
      history.push(`/`);
    }
  };

  return (
    <div>
      <Navigation />
      <div className="container-fluid">
        <div id="login-form" className="row login main-content text-center">
          <div className="col-md-4 text-center company__info">
            <span className="login company__logo">
              <img id="company-logo" alt="company-logo" src={JobLogo} />
            </span>
            <h4 className="login company_title">Smith's Find a Job</h4>
          </div>
          <div className="col-md-8 col-xs-12 col-sm-12 login login_form ">
            <div className="container-fluid">
              <div className="login row">
                <h2>Log In</h2>
              </div>
              <div className="login row">
                <form control="" className="login form-group">
                  <div className="login row">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="login form__input"
                      placeholder="Email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="login row">
                    <span className="fa fa-lock"></span>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="login form__input"
                      placeholder="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <div className="login row">
                    <input
                      type="checkbox"
                      name="remember_me"
                      id="remember_me"
                      className="mr-2"
                    />
                    <label for="remember_me">Remember Me!</label>
                  </div>
                  <div className="login row">
                    <input
                      onClick={(event) => login(event)}
                      type="submit"
                      value="Submit"
                      className="login btn"
                    />
                  </div>
                </form>
              </div>
              <div className="row">
                <p>
                  Don't have an account? <a href="#">Register Here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cheat-box">
        For testing purpose, please input:
        <br />
        Email: smithlam@gmail.com
        <br />
        Password: 123456
      </div>
    </div>
  );
}
