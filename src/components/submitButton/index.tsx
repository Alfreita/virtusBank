import React from "react";
import "./styles.css";
export default function SubmitButton(props: any) {
  return (
    <button className="button" type="submit">
      <label>{props.text}</label>
    </button>
  );
}
