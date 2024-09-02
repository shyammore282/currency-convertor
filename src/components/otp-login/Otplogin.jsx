import { useState } from "react";
import "./Style.css";

const Button = () => {
  <div className="button">
    <button>Save the file</button>
  </div>;
};

const Otplogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handelPhoneSubmit = (e) => {
    e.preventDefault();

    //phone validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone Number");
    }

    //backend api
    //show otp field
    setShowOtpInput(true);
  };

  return (
    <div className="container">
      <h1>otp login stystem</h1>
      <Button />
      {!showOtpInput ? (
        <form onSubmit={handelPhoneSubmit}>
          <input
            type="tel"
            value={phoneNumber}
            placeholder="Enter the phone number..."
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="formotpinput">show otp</div>
      )}
    </div>
  );
};

export default Otplogin;
