import React from "react";
import captureStyle from "./EventCapture.module.scss";

const EventCapture = () => {
  const grandClick = (e: any) => {
    console.log("Grand Parent");
  };
  const parentClick = (e: any) => {
    console.log("Parent");
  };
  const childClick = (e: React.MouseEvent) => {
    console.log("Child");
  };
  return (
    <div className={captureStyle.grandParent} onClickCapture={grandClick}>
      Capture Part
      <div className={captureStyle.parent} onClick={(e) => parentClick(e)}>
        <div className={captureStyle.child} onClick={(e) => childClick(e)}></div>
      </div>
    </div>
  );
};

export default EventCapture;
