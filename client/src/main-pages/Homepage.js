import React from "react";
import HeroSection from "../components/sections/HeroSection";
import StatistisSection from "../components/sections/StatistisSection";
import FAQs from "../components/FAQs";

const Homepage = (props) => {

  return (
    <>
      {" "}
      <HeroSection props={props}/>
     <StatistisSection/>
     <FAQs/>
    </>
  );
};

export default Homepage;
