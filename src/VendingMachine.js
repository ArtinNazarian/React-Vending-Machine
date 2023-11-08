import { Link } from "react-router-dom";
import React from "react";
import machineImg from "./vendingmachine.jpg";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h1>Pick a Snack</h1>
      <img src={machineImg} style={{ width: 500 }} />
      <h2>
        <Link to="/soda">Soda</Link>
      </h2>
      <h2>
        <Link to="/chips">Chips</Link>
      </h2>
      <h2>
        <Link to="/gum">Gum</Link>
      </h2>
    </div>
  );
};

export default VendingMachine;
