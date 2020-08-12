import React, { useState, useEffect } from "react";
import axios from "axios";
import StockCard from "./components/StockCard.js";

import "./styles.css";

export default function App() {
  let urlVar = {
    var1: ""
  };

  const [input, setInput] = useState({
    tickerSymbol: ""
  });

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

  const [price, setPrice] = useState({
    open: "",
    high: "",
    low: "",
    close: "",
    volume: ""
  });

  useEffect(() => {
    const url1 = `///https://www.alphavantage.co/query?function=OVERVIEW&symbol=${input.tickerSymbol}&apikey=5MRPGIK2APTZ9BFT`;
    // axios request for company information
    axios
      .get(url1)
      .then((res) => {
        //console.log("First request: ", res);
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
        console.log("Error calling URL1: ", err);
      });
    // axios request for stock price
    const url2 =
      "///https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=5MRPGIK2APTZ9BFT";

    axios
      .get(url2)
      .then((res) => {
        console.log(
          "Second request: ",
          res.data["Time Series (Daily)"]["2020-08-11"]
        );
        setPrice({
          open: res.data["Time Series (Daily)"]["2020-08-11"]["1. open"],
          high: res.data["Time Series (Daily)"]["2020-08-11"]["2. high"],
          low: res.data["Time Series (Daily)"]["2020-08-11"]["3. low"],
          close: res.data["Time Series (Daily)"]["2020-08-11"]["4. close"],
          volume: res.data["Time Series (Daily)"]["2020-08-11"]["5. volume"]
        });
      })
      .catch((err) => {
        console.log("Error calling URL2: ", err);
      });

    // const submit = (x) => {
    //   setInput({ tickerSymbol: x });
    // };

    //submit("hi");
  }, []);

  const submit = (e) => {
    e.preventDefault();
  };

  const url3 = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${input.tickerSymbol}&apikey=5MRPGIK2APTZ9BFT`;

  const refresh = (e) => {
    axios.get(url3).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="App">
      <h1>Stock Data App</h1>
      {/* <p>Ticker Symbol: {stock.ticker}</p>
      <p>Type: {stock.type}</p> */}
      <StockCard ticker={stock.ticker} type={stock.type} open={price.open} />
      <form onSubmit={(e) => submit(e)}>
        <input
          placeholder="Search a stock by it's ticker"
          type="text"
          value={input.tickerSymbol}
          onChange={(e) => setInput({ tickerSymbol: e.target.value })}
        />
        {/* <button onSubmit={console.log(input.tickerSymbol)}>Search</button> */}
        <button onSubmit={refresh()}>Search</button>
      </form>
    </div>
  );
}

//https://stackoverflow.com/questions/41736213/why-cant-i-change-my-input-value-in-react-even-with-the-onchange-listener

// const handleChange(event) {
//   setInput({tickerSymbol: event.target.value});
// }

// onTodoChange(value){
//   this.setState({
//        name: value
//   });
// }

// <input
//     className="form-control"
//     type="text" value={this.state.name}
//     id={'todoName' + this.props.id}
//     onChange={e => this.onTodoChange(e.target.value)}
// />
