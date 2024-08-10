import { useEffect, useState } from "react";
import "./currency.css";

const Currency = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRates] = useState();
  const [convertAmount, setConvertAmount] = useState();

  const fetchexchangeRate = async () => {
    const apiResponse = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`,
      {
        method: "GET",
      }
    );

    const result = await apiResponse.json();
    const calculate = result?.rates[toCurrency].toFixed(2);
    setExchangeRates(calculate);

    setConvertAmount(amount * calculate);
  };

  useEffect(() => {
    fetchexchangeRate();
  });

  return (
    <>
      <div className="input-container">
        <h2>Currency Converter</h2>
        <input
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          name="amount"
          value={amount}
          placeholder="Enter Amount ....."
        />

        <select
          name="currency"
          id=""
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="UYU">UYU</option>
        </select>
        <p>To</p>
        <div className="input-container">
          <input type="text" name="" value={convertAmount} readOnly />
          <select
            name=""
            id=""
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="INR">INR</option>
            <option value="EUR">EUR</option>
            <option value="UYU">UYU</option>
            <option value="USD">USD</option>
          </select>
        </div>

        <p>
          Exachnge Rates : 1 {fromCurrency}={exchangeRate}
        </p>
      </div>
    </>
  );
};

export default Currency;
