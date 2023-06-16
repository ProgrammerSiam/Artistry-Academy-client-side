import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
const Slider = () => {
    return (
        <div className="carousel w-full">

            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/LScgTYw/gabriel-gurrola-2-Uuh-MZEChdc-unsplash.jpg" className="w-full h-[calc(100vh-75px)]" />

                <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">

                    <div className='text-white space-y-7 lg:w-[900px] ml-12'>
                        <h1 className='text-6xl font-extrabold'>Exploring the Rhythm of Sound </h1>
                        <p className='capitalize'>Race into action with our high-speed toy cars that will leave you breathless. From sleek sports cars to rugged off-roaders, we have them all!</p>

                    </div>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className=" btn btn-outline btn-primary"> <FaAngleDoubleLeft /> </a>
                    <a href="#slide2" className=" btn btn-outline btn-primary"><FaAngleDoubleRight /> </a>
                </div>

            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/qCzjpNP/claude-gabriel-yv-EVMy-Tz-MO4-unsplash.jpg" className="w-full h-[calc(100vh-75px)]" />
                <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                    <div className='text-white space-y-7 lg:w-[900px] ml-12'>
                        <h1 className='text-6xl font-extrabold'>Harmonious Melodies </h1>
                        <p className='capitalize'>Discover timeless classics and iconic models that car enthusiasts will love. Build your dream collection with our range of vintage and collectible cars.</p>


                    </div>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className=" btn btn-outline btn-primary"><FaAngleDoubleLeft /></a>
                    <a href="#slide3" className=" btn btn-outline btn-primary"><FaAngleDoubleRight /></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/ncmG7k8/simon-weisser-ph-S37wg8c-Qg-unsplash.jpg" className="w-full h-[calc(100vh-75px)]" />
                <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                    <div className='text-white space-y-7 lg:w-[900px] ml-12'>
                        <h1 className='text-6xl font-extrabold'> Mighty Machines!</h1>
                        <p className='capitalize'>Get behind the wheel of powerful construction vehicles and heavy-duty trucks. Let your imagination soar as you build and conquer the toughest jobs!</p>

                    </div>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className=" btn btn-outline btn-primary"><FaAngleDoubleLeft /></a>
                    <a href="#slide4" className=" btn btn-outline btn-primary"><FaAngleDoubleRight /></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/Gd4v69c/jacek-dylag-h-UHzai-AHu-Uc-unsplash.jpg" className="w-full h-[calc(100vh-75px)]" />
                <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                    <div className='text-white space-y-7 lg:w-[900px] ml-12'>
                        <h1 className='text-6xl font-extrabold'>ake to the Skies!</h1>
                        <p className='capitalize'>Explore the world of aviation with our fantastic selection of toy planes and helicopters. Let your imagination soar high above the clouds!</p>

                    </div>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className=" btn btn-outline btn-primary"><FaAngleDoubleLeft /></a>
                    <a href="#slide5" className=" btn btn-outline btn-primary"><FaAngleDoubleRight /></a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/dMqHFcx/johannes-plenio-RWytw-Nue-Nng-unsplash.jpg" className="w-full h-[calc(100vh-75px)]" />
                <div className="absolute flex items-center  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] w-full  h-full top-0 left-0 ">
                    <div className='text-white space-y-7 lg:w-[900px] ml-12'>
                        <h1 className='text-6xl font-extrabold'>Piano Champions!</h1>
                        <p className='capitalize'>Embrace the competitive spirit with our range of race sets, tracks, and accessories. Challenge your friends and family to thrilling races and see who takes the checkered flag!</p>

                    </div>
                </div>
                <div className="absolute flex justify-between gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className=" btn btn-outline btn-primary"><FaAngleDoubleLeft /></a>
                    <a href="#slide1" className=" btn btn-outline btn-primary"><FaAngleDoubleRight /></a>
                </div>
            </div>

        </div>
    );
};

export default Slider;