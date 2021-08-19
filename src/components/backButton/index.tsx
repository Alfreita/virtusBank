import React from "react";
import "./styles.css";
export default function BackButton(props: any) {
  return (
    <button className={props.className} type={props.type} onClick={props.onClick}>
      <label>{props.text}</label>
    </button>
  );
}
