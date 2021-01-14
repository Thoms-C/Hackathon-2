import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";

function App() {
  const [searchValue, setsearchValue] = useState("");
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Home setsearchValue={setsearchValue} searchValue={searchValue} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
