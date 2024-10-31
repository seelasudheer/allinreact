import React from "react";
import bubbuleStyle from "./BubbleCapture.module.scss";

const Bubble = () => {
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
    <div className={bubbuleStyle.grandParent} onClick={grandClick}>
      Bubble Part
      <div className={bubbuleStyle.parent} onClick={(e) => parentClick(e)}>
        <div className={bubbuleStyle.child} onClick={(e) => childClick(e)}></div>
      </div>
    </div>
  );
};

export default Bubble;
