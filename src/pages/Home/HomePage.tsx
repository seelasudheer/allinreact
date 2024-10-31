import React from "react";
import Parent from "../../components/LiftingStateUp/Parent";
import ClickClounter from "../../components/HOCExample/ClickClounter";
import HoverCounter from "../../components/HOCExample/HoverCounter";
import EventCapture from "../../components/BubbleCaptureEvents/EventCapture";
import Bubble from "../../components/BubbleCaptureEvents/Bubble";
import UseCallBackComponent from "../../components/CallBackMemo/UseCallBackComponent";
import UseMemoComponent from "../../components/CallBackMemo/UseMemoComponent";
import Debounce from "../../components/eventdebouncingthrottle/Debounce";
import CounterTimer from "../../components/IntervelHookCounter/CounterTimer";
import PracticeDebounce from "../../components/eventdebouncingthrottle/PracticeDebounce";
import RefDebounce from "../../components/eventdebouncingthrottle/RefDebounce";

const HomePage = () => {
  return (
    <div className="row m-0">
      <div className="col-3 ">
        <Parent />
        <h3>HOC Component</h3>
        <ClickClounter skills={"karate"} />
        ===============
        <HoverCounter />
        <CounterTimer />
      </div>
      <div className="col-4">
        <EventCapture />
        <br />
        <Bubble />
      </div>
      <div className="col-4">
        {/* <Debounce /> */}
        {/* <PracticeDebounce /> */}
        <RefDebounce />
        ======================
        <UseCallBackComponent />
        =====================
        <UseMemoComponent />
      </div>
    </div>
  );
};

export default HomePage;
