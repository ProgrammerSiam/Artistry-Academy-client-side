import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocalLogin from "../../SharePage/SocalLogin/SocalLogin";
import useAuth from "../../UseHooks/useAuth/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
// import Lottie from "lottie-react";
// import loginAnimation from "../../assets/132033-green-login.json";

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
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        {/* <div className="text-center lg:text-left">
          <Lottie animationData={loginAnimation}></Lottie>
        </div> */}
        <div className="w-full max-w-sm p-2 space-y-0 shadow-2xl card bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="-mb-0">
            <div className="-mt-16 form-control">
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
            <div className="space-y-0 form-control">
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
                  className="absolute top-6 right-5"
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
            <div className="mt-2 form-control">
              <input
                className="w-full text-black border cursor-pointer "
                type="submit"
                value="LOGIN"
              />
              <p className="text-sm">
                Create a Accout{" "}
                <Link to="/signup" className="text-blue-400 underline">
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
