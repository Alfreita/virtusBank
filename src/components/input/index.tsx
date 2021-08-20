import React from "react";
import "./styles.css";
export default function Input(props: any) {
  return (
    <div className="container-input">
      <label>{props.label}</label>
      <input
        alt="input"
        className="input"
        value={props.value}
        onChange={(value) => props.setValue(value)}
        type={props.type}
      />
    </div>
  );
}
