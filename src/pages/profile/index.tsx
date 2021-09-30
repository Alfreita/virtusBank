import React from "react";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useHistory } from "react-router";
import Header from "../../components/header";
import "./styles.css";

const Profile: React.FC = () => {
  const history = useHistory();
  return (
    <div className="profile-container">
      <Header />
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
