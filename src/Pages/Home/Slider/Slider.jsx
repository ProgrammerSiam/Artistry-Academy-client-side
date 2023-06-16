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
            <h1 className="text-6xl font-extrabold">
              Welcome to Creative Expressions,
            </h1>
            <p className="capitalize">
              At Creative Expressions, we believe that art is not just about
              creating beautiful masterpieces but also about self-expression,
              exploration, and personal growth. Our team of skilled and
              passionate instructors is dedicated to providing a supportive and
              encouraging environment where you can discover your artistic voice
              and develop your skills.
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
            <h1 className="text-6xl font-extrabold">
              Welcome to Creative Palette,
            </h1>
            <p className="capitalize">
              At Creative Palette, we offer a diverse range of art and craft
              classes taught by talented instructors who are passionate about
              their craft. Whether you're a beginner looking to explore your
              artistic talents or an experienced artist seeking to refine your
              skills, our courses are designed to cater to your unique needs and
              goals.
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
