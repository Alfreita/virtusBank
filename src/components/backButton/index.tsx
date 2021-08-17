import React from "react";
import "./styles.css";
export default function BackButton(props: any) {
  return (
    <button className="back-button" type="submit">
      <label>{props.text}</label>
    </button>
  );
}
