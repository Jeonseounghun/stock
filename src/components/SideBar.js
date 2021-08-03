import React from "react";

const SideBar = (props) => {
  window.addEventListener("keydown", (e) => {
    if (e.code == "KeyN") {
      if (props.count >= 100) {
        props.setCount(props.count + 1);
      } else {
        props.setCount(100);
      }
    }
  });

  return (
    <>
      <div
        className="button"
        onClick={() => {
          if (props.count >= 100) {
            props.setCount(props.count + 1);
          } else {
            props.setCount(100);
          }
        }}
      >
        시작하기
      </div>
      <div className="top">{props.high}</div>
      <div className="bottom">{props.low}</div>
    </>
  );
};

export default SideBar;
