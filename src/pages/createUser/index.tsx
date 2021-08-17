import React from "react";
import "./styles.css";
import Input from "../../components/input";
import SubmitButton from "../../components/submitButton";
import BackButton from "../../components/backButton";

export default function CreateUser() {
  return (
    <div className="container">
      <div className="input-container">
        <Input label="Username" />
        <Input label="E-mail" />
        <Input label="Password" />
        <Input label="Confirm password" />
        <div className="button-container">
          <BackButton text="Back" />
          <SubmitButton text="Create" />
        </div>
      </div>
    </div>
  );
}
