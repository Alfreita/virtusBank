import React, { useState } from "react";
import { useHistory } from "react-router";
import Input from "../../components/input";
import SubmitButton from "../../components/submitButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleLogin = (e: any) => {
    try {
      e.preventDefault();
      if (!user || !password) throw new Error("Please fill all field");
      history.push("/profile");
    } catch (error) {
      toast(error.message, { type: "error" });
    }
  };
  const setInputUser = (e: any) => {
    setUser(e.target.value);
  };
  const setInputPassword = (e: any) => {
    setPassword(e.target.value);
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
            <Input
              label="User"
              type="email"
              value={user}
              setValue={setInputUser}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              setValue={setInputPassword}
            />
            <SubmitButton text="Login" />

            <a href="/createAccount">Create account</a>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
