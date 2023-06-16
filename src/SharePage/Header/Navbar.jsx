import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvaiders/AuthProvaider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to={"/Instructors"}>Instructors</Link>
      </li>
      <li>
        <Link to={"/Class"}>Class</Link>
      </li>
      <li>
        <Link to="/dashbord">Dashbord</Link>
      </li>
      {user && (
        <>
          <li>
            {" "}
            <Link>
              {" "}
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </Link>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-8 bg-white navbar shadow-slate-600 bg-opacity-40">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="w-24"
            src="https://i.ibb.co/PgLk782/music.png"
            alt=""
          />
          <h3 className="-ml-6 font-serif font-semibold brandName">
            Music Class
          </h3>
        </div>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="items-center justify-center px-1 text-lg font-semibold menu menu-horizontal">
          {navMenu}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <button onClick={handleLogOut} className="border btn ">
            LogOut
          </button>
        ) : (
          <Link to="/login">
            <button className="border btn ">login</button>{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
