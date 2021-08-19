import React, { useState } from "react";
import Brand from "../../components/brand";
import "./styles.css";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

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

      <div className="card-container">
        <Card
          name="John Smith"
          number="**** **** **** 1111"
          expiry="10/20"
          cvc="737"
          preview={true}
          issuer="mastercard"
        />
        <div>
          <div>
            <label>Limite:</label>
            <label>$35.000</label>
          </div>
          <div>
            <label>Limite Utilizado:</label>
            <label>$27.000</label>
          </div>
        </div>
      </div>
    </div>
  );
}
