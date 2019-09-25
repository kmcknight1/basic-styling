import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/basicstyling.scss";
import "../../styles/global.scss";

import CodeData from "../CodeData";

function BasicStyling() {
  return (
    <div className="basic-styling-container Main">
      <NavLink className="link" to="/">
        Back to Home
      </NavLink>
      <h2>Basic Styling</h2>
      <div className="login-box">
        <h2>Welcome Back!</h2>

        <h4>Log in to ThisApp</h4>

        <form>
          <div className="username-password">
            <input placeholder="Username" type="text" />
            <input placeholder="Password" type="password" />
          </div>

          <label className="check">
            Remember Me
            <input type="checkbox" />
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
      <CodeData
        url={
          "https://raw.githubusercontent.com/kmcknight1/basic-styling/master/client/src/components/styled-comps/BasicStyling.js"
        }
        styles={
          "https://raw.githubusercontent.com/kmcknight1/basic-styling/master/client/src/styles/basicstyling.scss"
        }
      />
    </div>
  );
}

export default BasicStyling;