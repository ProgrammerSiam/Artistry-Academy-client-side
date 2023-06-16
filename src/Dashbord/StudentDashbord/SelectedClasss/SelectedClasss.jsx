import React, { useEffect, useState } from "react";
import useAuth from "../../../UseHooks/useAuth/useAuth";
import Selectcourse from "../../../Component/InstructorsCard/SelectCourse/Selectcourse";
import Swal from "sweetalert2";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../UseHooks/useAxiosSecure/useAxiosSecure";

const SelectedClasss = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const {
    data: selectcourse = [],
    refetch,
    isLoading,
  } = useQuery(["users"], async () => {
    const res = await axiosSecure.get(`/SelectedCourse/${user?.email}`);
    // console.log(res.data)

    return res.data;
  });

  const handleRemovecourse = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(_id);
        fetch(
          `https://server-mehediinfo10101-gmailcom.vercel.app/SelectCourse/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Select Course </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="rounded-full font-bold">
            <tr className="bg-blue-400 ">
              <th>SN</th>
              <th>Banner</th>
              <th>Course</th>
              <th>Instructors</th>
              <th>Course fee</th>
              <th>Remove</th>
              <th>Enrolled Confrim</th>
            </tr>
          </thead>
          <tbody>
            {selectcourse.map((course, index) => (
              <Selectcourse
                course={course}
                key={course._id}
                index={index}
                handleRemovecourse={handleRemovecourse}
              ></Selectcourse>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasss;
