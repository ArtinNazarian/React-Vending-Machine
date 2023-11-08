import { Link } from "react-router-dom";
import React from "react";
import chipsImg from "./Chips.png";

const Chips = () => {
  return (
    <div>
      <h1>Here is your bag of chips</h1>
      <img src={chipsImg} />
      <h2>
        <Link to="/">Go back</Link>
      </h2>
    </div>
  );
};

export default Chips;
