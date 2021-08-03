import React from "react";

const Bottom = (props) => {
  return (
    <>
      <div className="info">
        <div>현재 종가 : {props.currentPrice} </div>
        <div>
          현금 :{" "}
          {(props.money * ((100 + Number(props.profit)) / 100)).toFixed(0)}
        </div>
        <div>매입단가 : {props.buyPrice}</div>
        <div>수익률 : {props.profit}</div>
        <div>총수익금 : </div>
      </div>
      <div className="btn">
        <button
          className="buy"
          onClick={() => {
            props.setBuyPrice(props.currentPrice);
          }}
        >
          매수
        </button>
        <button
          className="sell"
          onClick={() => {
            props.setBuyPrice(0);
            props.setProfit(0);
            props.setMoney(
              (props.money * ((100 + Number(props.profit)) / 100)).toFixed(0)
            );
          }}
        >
          매도
        </button>
      </div>
    </>
  );
};

export default Bottom;
