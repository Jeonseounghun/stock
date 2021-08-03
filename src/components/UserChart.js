import React, { useEffect, useState } from "react";
import "../scss/chart.scss";

import data from "../db/바이오로그디바이스.json";
import SideBar from "./SideBar";
import Contents from "./content";
import Bottom from "./bottom";

const UserChart = () => {
  const [stock_data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [high, setHigh] = useState(0);
  const [low, setLow] = useState(0);
  const [buyPrice, setBuyPrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [profit, setProfit] = useState(0);
  const [money, setMoney] = useState(10000000);

  useEffect(() => {
    setData(data);
  }, [stock_data]);

  useEffect(() => {
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
  }, [count]);

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
            setBuyPrice={setBuyPrice}
            setCurrentPrice={setCurrentPrice}
            setProfit={setProfit}
            setMoney={setMoney}
            buyPrice={buyPrice}
            currentPrice={currentPrice}
            money={money}
            profit={profit}
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
        <div className="bottom">
          <Bottom
            setBuyPrice={setBuyPrice}
            setCurrentPrice={setCurrentPrice}
            setProfit={setProfit}
            buyPrice={buyPrice}
            currentPrice={currentPrice}
            profit={profit}
            money={money}
            setMoney={setMoney}
            money={money}
          />
        </div>
      </div>
    </>
  );
};

export default UserChart;
