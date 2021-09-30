import React from "react";
import { useHistory } from "react-router";

interface Iprops {
  title: string;
  toRedirect: string;
}
const HeaderButton: React.FC<Iprops> = (props: Iprops) => {
  const history = useHistory();
  return (
    <button onClick={() => history.push(props.toRedirect)}>
      <label>{props.title}</label>
    </button>
  );
};

export default HeaderButton;
