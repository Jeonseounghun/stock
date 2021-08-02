import React from "react";

const Contents = (props) => {
  let data_candle = [];

  if (props.count >= 100) {
    const data = props.stock_data;
    console.log(data[0]);
    data_candle = data.map((El) => (
      <>
        <div
          className="candle"
          style={{
            position: "relative",
            backgroundColor: "red",
            height: `${El.고가 - El.저가}px`,
            top: `${10 - ((El.고가 - props.high) / props.high) * 100}%`,
          }}
        ></div>
      </>
    ));
  } else {
  }

  return <>{data_candle}</>;
};

export default Contents;
