import React, { useState } from "react";
import useAuth from "../../../UseHooks/useAuth/useAuth";
import useAdmin from "../../../UseHooks/useAdmin/useAdmin";
import useinstuctor from "../../../UseHooks/useInstuctors/useinstuctor";
import Swal from "sweetalert2";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
const ClassList = ({ classes, refetch }) => {
  const { image, name, instructors_Name, seats, price, _id } = classes;
  const { user } = useAuth();
  const selectedCourse = {
    name,
    image,
    instructors_Name,
    _id,
    price,
    email: user?.email,
  };
  const [disableBtn, setDisableBtn] = useState(false);
  const [isadmin] = useAdmin();
  const [isinstuctor] = useinstuctor();

  const handleSelectCourse = () => {
    const selectCourse = {
      email: selectedCourse.email,
      image: selectedCourse.image,
      instructors_Name: selectedCourse.instructors_Name,
      name: selectedCourse.name,
      price: selectedCourse.price,
      payment_status: "unpaid",
      classID: selectedCourse._id,
    };
    console.log(selectCourse);
    fetch("https://server-mehediinfo10101-gmailcom.vercel.app/SelectCourse", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(selectCourse),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("data", data);
          refetch();
          setDisableBtn(true);
          Swal.fire("Your class has been selected.", "success");
        }
      });
  };

  return (
    <Slide>
      <div
        className={
          classes.seats == 0
            ? "card card-compact w-96 bg-red-600 shadow-xl"
            : "card card-compact w-96 bg-base-100 shadow-xl"
        }
      >
        <figure>
          <img
            className="w-96 h-72  rounded object-cover"
            src={classes.image}
            alt="Shoes"
          />
        </figure>

        <div className="card-body h-100 ">
          <h2 className="card-title">Tutorial : {classes.name}</h2>
          <h2 className="card-title">
            Instructor : {classes.instructors_Name}
          </h2>
          <h2 className="">Available Seats : {classes.seats}</h2>
          <h2 className="">Enrolled Student : {classes.enrolled_Student}</h2>
          <p> Course fee : ${classes.price}</p>
          <button
            disabled={
              disableBtn ||
              isadmin === true ||
              isinstuctor === true ||
              classes.seats == 0
            }
            onClick={handleSelectCourse}
            className="btn border"
          >
            Select class
          </button>
        </div>
      </div>
    </Slide>
  );
};

export default ClassList;
