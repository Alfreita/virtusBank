import React from "react";
import Brand from "../../components/brand";
import "./styles.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="header">
        <div className="features">
          <label>deposit</label>
          <label>getchash</label>
          <label>getaccount</label>
        </div>
        <div className="brandWidth">
          <Brand />
        </div>
        <div className="profileWidth">
          <label>Profile</label>
        </div>
      </div>
    </div>
  );
}
