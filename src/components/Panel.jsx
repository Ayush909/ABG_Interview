import React from "react";
import "./Panel.css";

const Panel = ({ title, multipleOf, arrayOfNums }) => {
  // const isMulitpleOf = (num, x) => {
  //   if (num % x === 0) {
  //     return true;
  //   }

  //   if (x === "") {
  //     return true;
  //   }
  //   return false;
  // };

  console.log("panel rendered for", multipleOf);

  return (
    <div className="panel__border">
      {title}
      {arrayOfNums.map((item) => {
        return <p>{item}</p>;
      })}
    </div>
  );
};

export default React.memo(Panel);
