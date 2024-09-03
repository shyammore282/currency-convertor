import { useState, useEffect, useRef } from "react";

const OtpInput = (onSubmitOtp = () => {}) => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (getIndex, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one input
    newOtp[getIndex] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger

    const combinedOtp = newOtp.join("");
    onSubmitOtp(combinedOtp);
  };

  const handleClick = (getIndex) => {};

  const handleKeyDown = (getIndex, e) => {};
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
