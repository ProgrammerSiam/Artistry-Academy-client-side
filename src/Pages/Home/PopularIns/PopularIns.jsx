import React from "react";
import useAxiosSecure from "../../../UseHooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "react-query";
// import Marquee from "react-fast-marquee";

const PopularIns = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: popularinstructors = [], refetch } = useQuery(
    ["popularinstructors"],
    async () => {
      const res = await axiosSecure.get("/popularinstructors");
      console.log(res.data);
      return res.data;
    }
  );

  return (
    <div className="my-10 py-10">
      <h2 className="my-5 py-5 text-3xl font-semibold text-center">
        Popular class Sort By Enrolled Student{" "}
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
        {popularinstructors.map((instructors) => (
          <div
            key={instructors._id}
            className="p-5 shadow-xl border card w-100"
          >
            <div className="card-body">
              <h2 className="card-title">
                Instructors : {instructors.instructors_Name}
              </h2>
              <p> Enrolled Student : {instructors.enrolled_Student}</p>
            </div>
            <figure>
              <img
                className="rounded-md w-50 h-50 object-cover"
                src={instructors.instructors_image}
                alt="Shoes"
              />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularIns;
