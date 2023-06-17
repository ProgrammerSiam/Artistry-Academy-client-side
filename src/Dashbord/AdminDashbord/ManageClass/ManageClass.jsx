import React from "react";
import useAxiosSecure from "../../../UseHooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "react-query";
import PendilgClassList from "./pendilgClassList";
import Swal from "sweetalert2";

const ManageClass = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    data: Classes = [],
    refetch,
    isLoading,
  } = useQuery(["Classes"], async () => {
    const res = await axiosSecure.get("/pendingClass");
    // console.log(res.data)
    return res.data;
  });
  // console.log(Classes)

  const handleAppproveClass = (id) => {
    console.log(id);
    fetch(
      `https://server-mehediinfo10101-gmailcom.vercel.app/approveclass/${id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
        alert("approved");
      });
  };
  const handledenyClass = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure to Deny the class?",
      text: "feedback the reason",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Deny it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://summer-school-data.vercel.app/denyclass/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="py-10 mb-10">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead className="bg-white border">
            <tr>
              <th>SN</th>
              <th>Instuctor</th>
              <th>Tutorial</th>
              <th>Price</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {Classes.map((tutorial, index) => (
              <PendilgClassList
                key={tutorial._id}
                tutorial={tutorial}
                index={index}
                handleAppproveClass={handleAppproveClass}
                handledenyClass={handledenyClass}
              ></PendilgClassList>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
