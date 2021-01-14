import React, { useState } from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import ResultsSearch from "../ResultsSearch";

function Home() {
  const [searchValue, setsearchValue] = useState("");
  return (
    <>
      <HeroSection searchValue={searchValue} setsearchValue={setsearchValue} />
      <ResultsSearch
        searchValue={searchValue}
        setsearchValue={setsearchValue}
      />
      <Cards />
    </>
  );
}

export default Home;
