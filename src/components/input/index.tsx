import React from "react";
import "./styles.css";
export default function Input(props: any) {
  return (
    <div className="container-input">
      <label>{props.label}</label>
      <input className="input" type={props.type} />
    </div>
  );
}
