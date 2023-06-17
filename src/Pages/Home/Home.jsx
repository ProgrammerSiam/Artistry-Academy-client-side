import React from "react";
import Slider from "./Slider/Slider";
import PopularIns from "./PopularIns/PopularIns";
import Featured from "../../SharePage/Featured]/Featured";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <PopularIns></PopularIns>
      <Featured />
    </>
  );
};

export default Home;
