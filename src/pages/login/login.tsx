import React from "react";
import { useHistory } from "react-router";
import "./styles.css";

export default function Login() {
  const history = useHistory();
  const handleLogin = (e: any) => {
    e.preventDefault();
    history.push("/profile");
  };
  return (
    <div className="container">
      <div className="brand-container">
        <p className="brand-name">Virtus</p>
        <p className="brand-bank">Bank</p>
      </div>

      <form onSubmit={handleLogin} className="">
        <div>
          <div className="logon-container">
            <div className="fields-container">
              <p>User:</p>
              <input className="input" />
            </div>
            <div className="fields-container">
              <p>Password:</p>
              <input className="input" />
            </div>
            <button className="button" type="submit">
              Login
            </button>
            <a href="/createAccount">Create account</a>
          </div>
        </div>
      </form>
    </div>
  );
}
