import { useState } from "react";
import "./style.css";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const onChangeHandler = (e) => {
    if (e.target.value <= 100 && e.target.value > 0) {
      setPercentage(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("please enter the value less then 100 ");
      setPercentage(e.target.value);
    }
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="progressbar">
            {percentage >= 0 && percentage <= 100 ? (
              <div className="percentageBar" style={{ width: `${percentage}%` }}>
                {percentage}
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <p>{errorMsg}</p>
          </div>
          <div className="input-value">
            <label htmlFor="input">input percentage</label>
            <input className="input" onChange={onChangeHandler} type="number" value={percentage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
