import React from "react";

const Contents = (props) => {
  let data_candle = [];
  const ratio = (props.high - props.low)/400
  
  
  if (props.count >= 100) {
    const data = props.stock_data;
    console.log(data[props.count]);
    const scrollY = document.querySelector(".content").scrollWidth
  document.querySelector(".content").scrollLeft = scrollY
    data_candle = data.map((El, idx) => (
      idx > props.count ? "" :<>
        <div
          className="candle"
          style={{
            position: "relative",
            
            height: `${(El.고가 - El.저가)/ratio}px`,
            top: `${(props.high - El.고가)/ratio}px`,
          }}
          onClick={()=> {
            console.log(El)
          }}
        >
          <div className="candle_detail" style={{}}></div>
        <div className="candle_detail2" style={{
          backgroundColor:`${El.종가>= El.시가 ?  "red" : "blue"}`,
          top:`${El.종가> El.시가 ?  (El.고가- El.종가)/ratio : (El.고가 - El.시가)/ratio}px`,
          height: `${El.종가>= El.시가 ? (El.종가- El.시가)/ratio + 1 : (El.시가 - El.종가)/ratio}px`,
          width:"5px"
          
        }}></div>
        </div>
      </>
    ));
    
  } else {
  }

  return <>{data_candle}</>;
};

export default Contents;
