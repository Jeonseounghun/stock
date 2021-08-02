import React, { useEffect, useState } from "react";
import "../scss/chart.scss";

import data from "../db/바이오로그디바이스.json";
import SideBar from "./SideBar";
import Contents from "./content";

const UserChart = () => {
  const [stock_data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [high, setHigh] = useState(0);
  const [low, setLow] = useState(0);
  useEffect(() => {
    setData(data);
  }, [stock_data]);

  useEffect(() => {
    high_low();
  }, [count]);

  const high_low = () => {
    let high_value = 0;
    let low_value = 9999999999;
    for (let i = 0; i < count; i++) {
      if (data[i].고가 > high_value) {
        high_value = data[i].고가;
      }
      if (data[i].저가 < low_value) {
        low_value = data[i].저가;
      }
    }
    setHigh(high_value);
    setLow(low_value);
  };

  return (
    <>
      <div id="canvas">
        <div className="content">
          <Contents
            stock_data={stock_data}
            high={high}
            low={low}
            setCount={setCount}
            count={count}
          />
        </div>
        <div className="side">
          <SideBar
            stock_data={stock_data}
            high={high}
            low={low}
            setCount={setCount}
            count={count}
          />
        </div>
        <div className="bottom"></div>
      </div>
    </>
  );
};

export default UserChart;
