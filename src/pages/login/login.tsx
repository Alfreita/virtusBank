import React, { useState } from "react";
import { useHistory } from "react-router";
import Input from "../../components/input";
import SubmitButton from "../../components/submitButton";
import Brand from "../../components/brand";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import LoginUser from "../../consumer/loginUserData";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleLogin = async(e: any) => {
    try {
      e.preventDefault();
      if (!userEmail || !password) throw new Error("Please fill all field");
      history.push("/profile");
      await LoginUser(userEmail, password);
    } catch (error) {
      toast(error.message, { type: "error" });
    }
  };
  const setInputUser = (e: any) => {
    setUserEmail(e.target.value);
  };
  const setInputPassword = (e: any) => {
    setPassword(e.target.value);
  };
  return (
    <div className="container">
      <Brand />
      <form onSubmit={handleLogin} className="">
        <div>
          <div className="logon-container">
            <Input
              label="User"
              type="email"
              value={userEmail}
              setValue={setInputUser}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              setValue={setInputPassword}
            />
            <SubmitButton text="Login" type="submit" />

            <a href="/createAccount">Create account</a>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
