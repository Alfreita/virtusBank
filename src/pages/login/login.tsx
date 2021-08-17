import React from "react";
import { useHistory } from "react-router";
import Input from "../../components/input";
import SubmitButton from "../../components/submitButton";
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
            <Input label="User" type="email" />
            <Input label="Password" type="password" />
            <SubmitButton text="Login" />
            <a href="/createAccount">Create account</a>
          </div>
        </div>
      </form>
    </div>
  );
}
