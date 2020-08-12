import React from "react";

const StockCard = (props) => {
  return (
    <>
      <p>Ticker Symbol: {props.ticker}</p>
      <p>Type: {props.type}</p>
      <p>Exchange: {props.exchange}</p>
      <p>Open: {props.open}</p>
      <p>Close: {props.close}</p>
      <p>High: {props.high}</p>
      <p>Low: {props.low}</p>
      <p>Volume: {props.volume}</p>
      <p>Description: {props.description}</p>
    </>
  );
};

export default StockCard;
