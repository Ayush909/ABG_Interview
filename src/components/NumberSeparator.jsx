import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRandomNum } from "../store/numberSlice";
import Panel from "./Panel";

import "./Panel.css";

const NumberSeparator = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.number);
  let timer;

  const generateNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setLoading(true);
    timer = setTimeout(() => {
      dispatch(addRandomNum(randomNum));
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <div>
      <button onClick={generateNum} disabled={loading}>
        New Number
      </button>
      {loading && <>Loading...</>}
      <div className="flex flex-row">
        <Panel
          title="Multiple 4"
          multipleOf={"4"}
          arrayOfNums={state.arrayOfNums4}
        />
        <Panel
          title="Multiple 3"
          multipleOf={"3"}
          arrayOfNums={state.arrayOfNums3}
        />
        <Panel
          title="Multiple 6"
          multipleOf={"6"}
          arrayOfNums={state.arrayOfNums6}
        />
        <Panel
          title="Everything else"
          multipleOf={""}
          arrayOfNums={state.arrayOfNumsAll}
        />
      </div>
    </div>
  );
};

export default NumberSeparator;
