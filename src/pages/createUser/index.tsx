import React, { useState } from "react";
import "./styles.css";
import Input from "../../components/input";
import SubmitButton from "../../components/submitButton";
import BackButton from "../../components/backButton";
import Brand from "../../components/brand";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateUserData from "../../consumer/createUserData";

export default function CreateUser() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();
  const handleClick = (e: any) => {
    e.preventDefault();
    history.goBack();
  };
  const handleUserName = (e: any) => {
    setUserName(e.target.value);
  };
  const handleUserEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const handleUserPassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleUserConfirm = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const handleCreate = async (e: any) => {
    try {
      e.preventDefault();
      if (!userName || !email || !password || !confirmPassword)
        throw new Error("Please fill all field");
      if (password !== confirmPassword)
        throw new Error("Mismatch password and confirm password");
      const response = await CreateUserData(userName, email, password);
      history.push("/");
    } catch (error) {
      console.log(error);
      toast(error.message, { type: "error" });
    }
  };

  return (
    <div className="container">
      <Brand />
      <div className="input-container">
        <Input
          label="Username"
          type="text"
          value={userName}
          setValue={handleUserName}
        />
        <Input
          label="E-mail"
          type="email"
          value={email}
          setValue={handleUserEmail}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          setValue={handleUserPassword}
        />
        <Input
          label="Confirm password"
          type="password"
          value={confirmPassword}
          setValue={handleUserConfirm}
        />
        <div className="button-container">
          <BackButton
            text="Back"
            onClick={handleClick}
            type="button"
            className="back-button"
          />
          <SubmitButton
            text="Create"
            onClick={handleCreate}
            type="submit-button"
            className="submit-button"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
