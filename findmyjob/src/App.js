import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/DashBoard";
import Home from "./components/pages/Home";
import Connexion from "./components/pages/Connexion";
import Recruteur from "./components/pages/Recruteur";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Connexion" component={Connexion} />
          <Route path="/Recruteur" component={Recruteur} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
