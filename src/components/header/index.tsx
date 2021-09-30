import React from "react";
import { useHistory } from "react-router";
import Brand from "../brand";
import "./styles.css";
const Header: React.FC = () => {
  const history = useHistory();
  return (
    <div className="header">
      <div className="features">
        <button onClick={() => history.push("/deposit")}>
          <label>deposit</label>
        </button>
        <button onClick={() => history.push("/deposit")}>
          <label>getchash</label>
        </button>
      </div>
      <div className="brandWidth">
        <Brand />
      </div>
      <div className="profileWidth">
        <button onClick={() => history.push("/profile")}>
          <label>Profile</label>
        </button>
      </div>
    </div>
  );
};
export default Header;
