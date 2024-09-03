import { useState } from "react";
import OtpInput from "./OtpInput";
import "./Style.css";

const Otplogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handelPhoneSubmit = (e) => {
    //phone validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
    }

    //backend api
    //show otp field
    setShowOtpInput(true);
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1>otp login stystem</h1>
      {!showOtpInput ? (
        <form onSubmit={handelPhoneSubmit}>
          <input
            className="inputphone"
            type="tel"
            value={phoneNumber}
            placeholder="Enter the phone number..."
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="formotpinput">
          <h4>fill the otp {phoneNumber}</h4>
          <OtpInput onSubmitOtp />
        </div>
      )}
    </div>
  );
};

export default Otplogin;
