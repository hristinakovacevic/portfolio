import React, { useState } from "react";
import "./Resume.model.css";

const Item = ({ id, title, date, text }) => {
  const [isClicked, setIsClicked] = useState(false);
  function clickedItem() {
    setIsClicked(!isClicked);
  }
  return (
    <div key={id} className={`${isClicked ? "show-height" : "hide-height"}`}>
      <h3 onClick={clickedItem}>{title}</h3>

      <div
        style={{ position: "absolute" }}
        className={`${isClicked ? "show" : "hide"}`}
      >
        <p>{date}</p>
        <ul>
          {text.map((p, i) => {
            return <li key={i}>{p}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Item;
