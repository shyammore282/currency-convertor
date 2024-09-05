import { useState } from "react";
import OtpInput from "./OtpInput";
import "./Style.css";

const Otplogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleOnChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handelPhoneSubmit = (e) => {
    //phone validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber) || phoneNumber.length > 10) {
      alert("Invalid Phone Number");
    }

    //backend api
    //show otp field
    if (phoneNumber.length === 10) {
      setShowOtpInput(true);
    }
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="container-wrapper">
        <h1>otp login stystem</h1>
        {!showOtpInput ? (
          <form onSubmit={handelPhoneSubmit}>
            <input
              className="inputphone"
              type="tel"
              value={phoneNumber}
              placeholder="Enter the phone number..."
              onChange={handleOnChange}
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="formotpinput">
            <h4>fill the otp </h4>
            <OtpInput />
          </div>
        )}
      </div>
    </div>
  );
};

export default Otplogin;
