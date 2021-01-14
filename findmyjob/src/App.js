import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
