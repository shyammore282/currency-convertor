import { useState, useEffect, useRef } from "react";

const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const onOtpSubmit = (otp) => {
    console.log("login successfull", otp);
  };

  const handleChange = (getIndex, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[getIndex] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === 4) {
      onOtpSubmit(combinedOtp);
    }

    // Move to next input if current field id filled
    if (value && getIndex < 3 && inputRefs.current[getIndex + 1]) {
      inputRefs.current[getIndex + 1].focus();
    }
  };

  const handleClick = (getIndex) => {
    inputRefs.current[getIndex].setSelectionRange(1, 1);

    //  move the previes empty field
    // if (getIndex > 0 && !otp[getIndex - 1]) {
    //   inputRefs.current[otp.indexOf("")].focus();
    // }
  };

  const handleKeyDown = (getIndex, e) => {
    // move focus to the previous input field on backspace
    if (e.key === "Backspace" && !otp[getIndex] && getIndex > 0 && inputRefs.current[getIndex - 1]) {
      inputRefs.current[getIndex - 1].focus();
    }
  };
  return (
    <div className="input">
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(input) => {
              inputRefs.current[index] = input;
            }}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
