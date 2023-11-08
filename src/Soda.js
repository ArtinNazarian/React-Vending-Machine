import { Link } from "react-router-dom";
import React from "react";
import sodaImg from "./Soda.png";

const Soda = () => {
  return (
    <div>
      <h1>Here is your soda</h1>
      <img src={sodaImg} />
      <h2>
        <Link to="/">Go back</Link>
      </h2>
    </div>
  );
};

export default Soda;
