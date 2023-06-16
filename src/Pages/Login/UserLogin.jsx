import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocalLogin from "../../SharePage/SocalLogin/SocalLogin";
import useAuth from "../../UseHooks/useAuth/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/132033-green-login.json";

const UserLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [hidePass, setHidePass] = useState(false);
  // console.log(hidePass)
  const onSubmit = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        const user = result.user;
        const userinfo = {
          name: user.displayName,
          email: user.email,
          userProfile: user.photoURL,
          role: "student",
        };
        fetch("https://server-mehediinfo10101-gmailcom.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userinfo),
        })
          .then((res) => res.json())
          .then((dataa) => {
            if (dataa.insertedId) {
              Swal.fire("User Login Successful");
            }

            console.log("dataa", dataa);
          });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={loginAnimation}></Lottie>
        </div>
        <div className="card  p-2 w-full max-w-sm shadow-2xl space-y-0 bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="-mb-0">
            <div className="form-control -mt-16">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                className="text-input"
                {...register("email")}
                required
              />
            </div>
            <div className="form-control space-y-0">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={hidePass ? "text" : "password"}
                  placeholder="password"
                  className="text-input"
                  {...register("password")}
                  required
                />
                <span
                  onClick={() => setHidePass(!hidePass)}
                  className="absolute top-6  right-5"
                >
                  {hidePass ? <FaEyeSlash /> : <FaEye />}{" "}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-2">
              <input
                className="btn w-full bg-slate-700 text-white hover:text-black "
                type="submit"
                value="LOGIN"
              />
              <p className="text-sm">
                Create a Accout{" "}
                <Link to="/signup" className="underline text-blue-400">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
          <SocalLogin></SocalLogin>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
