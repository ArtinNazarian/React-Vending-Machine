import { Link } from "react-router-dom";
import React from "react";
import gumImg from "./gum.jpeg";
const Gum = () => {
  return (
    <div>
      <h1>Here is your gum</h1>
      <img src={gumImg} />
      <h2>
        <Link to="/">Go back</Link>
      </h2>
    </div>
  );
};

export default Gum;
