import React from "react";

const StockCard = (props) => {
  return (
    <>
      <p>Card</p>
      <p>Ticker Symbol: {props.ticker}</p>
      <p>Type: {props.type}</p>
      <p>Open: {props.open}</p>
    </>
  );
};

export default StockCard;
