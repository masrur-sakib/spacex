import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import FiltersSection from "../FiltersSection/FiltersSection";
import Missions from "../Missions/Missions";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <FiltersSection />
      <Missions />
    </>
  );
};

export default Homepage;
