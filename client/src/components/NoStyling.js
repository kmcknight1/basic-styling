import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/global.scss";

function NoStyling() {
  return (
    <div className="Main">
      <NavLink className="link" to="/">
        Back to Home
      </NavLink>
      <h1>No Styling</h1>
      <div className="page">
        <h2>Welcome Back!</h2>
        <br />
        <form>
          <label>
            Username:
            <input type="text" />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input type="password" />
          </label>
          <br />
          <br />
          <label>
            Remember Me
            <input type="checkbox" />
          </label>
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default NoStyling;
