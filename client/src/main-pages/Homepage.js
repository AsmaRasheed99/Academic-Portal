import React from "react";
import HeroSection from "../components/sections/HeroSection";
import StatistisSection from "../components/sections/StatistisSection";
import FAQs from "../components/sections/FAQs";
import HomeCourses from "../components/sections/HomeCourses";
import CategoriesSection from "../components/sections/CategoriesSection";

const Homepage = (props) => {

  return (
    <>
      {" "}
      <HeroSection props={props}/>
     <StatistisSection/>
     <HomeCourses/>
     <CategoriesSection/>
     <FAQs/>

    </>
  );
};

export default Homepage;
