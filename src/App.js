import React, { useState, useEffect } from "react";
import axios from "axios";

import "./styles.css";

export default function App() {
  const [stock, setStock] = useState({
    ticker: "",
    type: "",
    name: "",
    exchange: "",
    country: "",
    sector: "",
    industry: "",
    fiftytwoh: "",
    fiftytwol: "",
    price: ""
  });

  useEffect(() => {
    const url =
      "https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=5MRPGIK2APTZ9BFT";
    axios
      .get(url)
      .then((res) => {
        console.log("Response: ", res);
        setStock({
          ticker: res.data.Symbol,
          type: res.data.AssetType,
          name: res.data.Name,
          exchange: res.data.Exchange,
          country: res.data.Country,
          sector: res.data.Sector,
          industry: res.data.Industry,
          fiftytwoh: res.data.WeekHigh,
          fiftytwol: res.data.WeekLow
        });
        //console.log(stock);
        //console.log(stock.ticker);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Stock Data App</h1>
      <p>Ticker Symbol: {stock.ticker}</p>
      <p>Type: {stock.type}</p>
    </div>
  );
}
