import React from "react";
// import Lottie from "lottie-react";
// import errorAnimation from "../../assets/error animation.json";
import { Link, useLocation, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  // console.log(status)
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="  ">
        {/* <div className="w-full md:w-3/4 ">
                    <Lottie className='h-[600px]' animationData={errorAnimation}></Lottie>
                </div> */}

        <div className="">
          <p className="text-3xl font-bold">
            <span className="">Opps!</span> {status}
          </p>
          <p className="text-error font-bold">{error?.message}</p>
          <br />
          <Link to="/" className="px-6 py-2 mt-10 text-black border font-bold">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
