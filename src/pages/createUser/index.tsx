import React from "react";
import "./styles.css";
import Input from "../../components/input";
import SubmitButton from "../../components/submitButton";
import BackButton from "../../components/backButton";
import { useHistory } from "react-router";

export default function CreateUser() {
  const history = useHistory();
  const handleClick = (e:any) => {
    e.preventDefault();
    history.goBack();
  };
  return (
    <div className="container">
      <div className="input-container">
        <Input label="Username" />
        <Input label="E-mail" />
        <Input label="Password" />
        <Input label="Confirm password" />
        <div className="button-container">
          <BackButton text="Back" onClick={handleClick} />
          <SubmitButton text="Create" />
        </div>
      </div>
    </div>
  );
}
