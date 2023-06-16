import React from 'react'
import Lottie from "lottie-react";
import errorAnimation from "../../assets/error animation.json";
import { Link, useLocation, useRouteError } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const ErrorPage = () => {
    const { error, status } = useRouteError()
    // console.log(status)
    return (
        <div>
            <div className="flex items-center justify-center ">
                <div className="w-full md:w-3/4 ">
                    <Lottie className='h-[600px]' animationData={errorAnimation}></Lottie>
                </div>
                <div className="w-full md:w-1/2 space-y-3 ">
                    <p className="text-3xl font-bold"> <span className=''>Opps!</span>  {status}</p>
                    <p className="text-error font-bold">{error?.message}</p>
                    <button >
                        <Link to='/' className="px-6 py-2 rounded-md bg-error font-bold">Back to Home</Link>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ErrorPage
