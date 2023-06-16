import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvaiders/AuthProvaider";
import SocalLogin from "../../SharePage/SocalLogin/SocalLogin";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/signup.json";
// import { Helmet } from 'react-helmet-async';

const SignUp = () => {
  const navigate = useNavigate();
  const [hidePass, setHidePass] = useState(true);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // if (data.password === data.Confrim_password) {
    //   setError("password don't match");
    //   return;
    // }

    createUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(data.name, data.photo)
          .then((updateData) => {
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  console.log(error);
  return (
    <div>
      {/* <Helmet>
                <title>Sign Up</title>
            </Helmet> */}
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <Lottie
              className="h-[700px]"
              animationData={loginAnimation}
            ></Lottie>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 h-[80vh] overflow-y-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center p-4 -mb-0"
            >
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="text-input"
                  {...register("name")}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="text-input"
                  {...register("email")}
                  required
                />
              </div>
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  {/* <input type={hidePass ? 'password' : 'text'} placeholder=" password" className="text-input" {...register("password")} required /> */}
                  <input
                    type={hidePass ? "password" : "text"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    })}
                    placeholder="password"
                    className="text-input"
                  />

                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>
                <span className="text-error">{error && error}</span>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type={hidePass ? "password" : "text"}
                    placeholder="Confirm password"
                    className="text-input"
                    {...register("Confrim_password")}
                    required
                  />
                </div>
                <button
                  onClick={() => setHidePass(!hidePass)}
                  className="flex items-center gap-1 my-2 ml-3"
                >
                  {/*  */}
                  {hidePass ? (
                    <>
                      <FaEye /> Show Password
                    </>
                  ) : (
                    <>
                      <FaEyeSlash /> Hide Password
                    </>
                  )}
                </button>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo URL"
                  className="text-input"
                  {...register("photo")}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select className="text-input" {...register("gender")}>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact Number</span>
                </label>
                <input
                  type="number"
                  placeholder="Contact Number"
                  className="text-input"
                  {...register("phone")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Present address"
                  className="text-input"
                  {...register("address")}
                />
              </div>
              <div className="mt-6 form-control">
                <input
                  className="text-black border btn w-80"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="ml-5 text-sm">
              Already have An Account ?{" "}
              <Link to="/login" className="text-blue-500 underline">
                Login
              </Link>
            </p>
            <SocalLogin></SocalLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
