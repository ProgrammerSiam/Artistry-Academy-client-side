import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
const Slider = () => {
  return (
    <div className="w-full carousel">
      <div id="slide1" className="relative w-full carousel-item">
        <img
          src="https://i.ibb.co/ZhdPkqZ/banner2.jpg"
          className="w-full h-[calc(100vh-75px)]"
        />

        <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
          <div className="text-white space-y-7 lg:w-[900px] ml-12">
            <h1 className="text-6xl font-extrabold">
              Welcome to Artistry Academy,
            </h1>
            <p className="capitalize">
              At Artistry Academy, we believe that art is a powerful form of
              self-expression that has the ability to touch hearts, transcend
              boundaries, and bring people together. Our dedicated team of
              experienced instructors are passionate about sharing their
              knowledge and guiding students of all ages and skill levels on
              their artistic journey.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5">
          <a href="#slide5" className=" btn btn-outline btn-primary">
            <FaAngleDoubleLeft />{" "}
          </a>
          <a href="#slide2" className=" btn btn-outline btn-primary">
            <FaAngleDoubleRight />{" "}
          </a>
        </div>
      </div>

      <div id="slide2" className="relative w-full carousel-item">
        <img
          src="https://i.ibb.co/qCzjpNP/claude-gabriel-yv-EVMy-Tz-MO4-unsplash.jpg"
          className="w-full h-[calc(100vh-75px)]"
        />
        <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
          <div className="text-white space-y-7 lg:w-[900px] ml-12">
            <h1 className="text-6xl font-extrabold">Harmonious Melodies </h1>
            <p className="capitalize">
              Discover timeless classics and iconic models that car enthusiasts
              will love. Build your dream collection with our range of vintage
              and collectible cars.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5">
          <a href="#slide1" className=" btn btn-outline btn-primary">
            <FaAngleDoubleLeft />
          </a>
          <a href="#slide3" className=" btn btn-outline btn-primary">
            <FaAngleDoubleRight />
          </a>
        </div>
      </div>

      <div id="slide3" className="relative w-full carousel-item">
        <img
          src="https://i.ibb.co/ncmG7k8/simon-weisser-ph-S37wg8c-Qg-unsplash.jpg"
          className="w-full h-[calc(100vh-75px)]"
        />
        <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
          <div className="text-white space-y-7 lg:w-[900px] ml-12">
            <h1 className="text-6xl font-extrabold"> Mighty Machines!</h1>
            <p className="capitalize">
              Get behind the wheel of powerful construction vehicles and
              heavy-duty trucks. Let your imagination soar as you build and
              conquer the toughest jobs!
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5">
          <a href="#slide2" className=" btn btn-outline btn-primary">
            <FaAngleDoubleLeft />
          </a>
          <a href="#slide4" className=" btn btn-outline btn-primary">
            <FaAngleDoubleRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
