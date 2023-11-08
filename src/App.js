import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Gum from "./Gum";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <VendingMachine />
      </Route>
      <Route exact path="/chips">
        <Chips />
      </Route>
      <Route exact path="/gum">
        <Gum />
      </Route>
      <Route exact path="/soda">
        <Soda />
      </Route>
    </BrowserRouter>
  );
}

export default App;