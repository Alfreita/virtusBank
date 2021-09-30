import React from "react";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import Brand from "../../components/brand";
import "./styles.css";

const Profile: React.FC = () => {
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
        <div className="card">
          <Card
            name="John Smith"
            number="**** **** **** 1111"
            expiry="10/20"
            cvc="737"
            preview={true}
            issuer="mastercard"
          />
        </div>

        <div className="card-limit">
          <div className="card-label">
            <label className="lblName">Limite:</label>
            <label className="lblLimitTotal">$35.000</label>
          </div>
          <div className="card-label">
            <label className="lblName">Utilizado:</label>
            <label className="lblLimitUsed">$27.000</label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
