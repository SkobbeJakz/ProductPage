import React from "react";
import "./Payments.css";
import iconMastercard from "../../assets/imgs/icon8-mastercard.svg";
import iconVisa from "../../assets/imgs/icon8-visa.svg";
import iconApplPay from "../../assets/imgs/icon8-apple_pay.svg";

const Payments = () => {
  return (
    <div className="row payments">
      <span className="payment-span">Payments:</span>
      <img
        src={iconMastercard}
        className="img icon-mastercard"
        alt="Icon-Visa"
      />
      <img src={iconVisa} className="img icon-visa" alt="Icon-MasterCard" />
      <img
        src={iconApplPay}
        className="img icon-apple-pay"
        alt="Icon-Apply-Pay"
      />
    </div>
  );
};

export default Payments;
