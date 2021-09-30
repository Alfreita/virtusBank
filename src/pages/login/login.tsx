import React, { useState } from "react";
import { useHistory } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Brand from "../../components/brand";
import Button from "../../components/Button";
import Input from "../../components/input";
import LoginUser from "../../consumer/loginUserData";
import "./styles.css";

const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleLogin = async (e: any) => {
    try {
      e.preventDefault();
      if (!userEmail || !password) throw new Error("Please fill all field");
      await LoginUser(userEmail, password);
      history.push("/profile");
    } catch (error) {
      if (!error.message.includes("401")) {
        toast("Try again!!", { type: "warning" });
      } else {
        toast("Not authorized", { type: "error" });
      }
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
              label="Email"
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
            <Button text="Login" type="submit" className="submit-button" />

            <a href="/createAccount">Create account</a>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
export default Login;
