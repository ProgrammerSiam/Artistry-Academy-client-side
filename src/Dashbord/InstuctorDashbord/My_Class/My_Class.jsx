import React from "react";
import useAxiosSecure from "../../../UseHooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../UseHooks/useAuth/useAuth";
import { useQuery } from "react-query";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const My_Class = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get(`/myClass/${user?.email}`);
    console.log(res.data);
    return res.data;
  });

  const removeMyClass = (id) => {
    console.log(id);

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
        fetch(
          `https://server-mehediinfo10101-gmailcom.vercel.app/class/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      my class {classes.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-white border">
            <tr>
              <th>SN</th>
              <th>Banner</th>
              <th>Tutorial</th>
              <th>Total Enrolled</th>
              <th>Available Seats</th>
              <th>Remove </th>
              <th>Update</th>
              <th>Admin Feedback</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((AllClass, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <img
                    className="w-24 h-16 rounded"
                    src={AllClass.image}
                    alt=""
                  />
                </td>
                <td>{AllClass.name}</td>
                <td>{AllClass.enrolled_Student}</td>
                <td>{AllClass.seats}</td>
                <td className="">
                  <button
                    onClick={() => removeMyClass(AllClass._id)}
                    className="bg-transparent hover:bg-transparent "
                  >
                    <FaTrashAlt className="text-2xl text-error hover:text-black" />
                  </button>
                </td>
                <td>
                  <button className="bg-transparent hover:bg-transparent ">
                    <FaPenAlt className="text-2xl text-error  hover:text-black" />
                  </button>
                </td>

                <th>
                  {AllClass.status === "denied" ? (
                    <span className="px-2 style-btn "> Admin FeedBack</span>
                  ) : AllClass.status === "approved" ? (
                    <span className="text-success">{AllClass.status}</span>
                  ) : (
                    <span className="text-pink-600">{AllClass.status}...</span>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default My_Class;
