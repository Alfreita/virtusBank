import React from "react";
import Brand from "../brand";
import HeaderButton from "../headerButton";
import "./styles.css";
const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="features">
        <HeaderButton title="deposit" toRedirect="/deposit" />
        <HeaderButton title="getchash" toRedirect="/getcash" />
      </div>
      <div className="brandWidth">
        <Brand />
      </div>
      <div className="profileWidth">
        <HeaderButton title="Profile" toRedirect="/profile" />
      </div>
    </div>
  );
};
export default Header;
