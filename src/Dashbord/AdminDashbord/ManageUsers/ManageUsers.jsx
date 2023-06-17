import React, { useState } from "react";
import { useQuery } from "react-query";
import useAxiosSecure from "../../../UseHooks/useAxiosSecure/useAxiosSecure";
import { Fade } from "react-awesome-reveal";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    console.log(res.data);
    return res.data;
  });

  const handlemakeAdmin = (user) => {
    console.log(user);
    fetch(
      `https://server-mehediinfo10101-gmailcom.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };
  const handlemakeInstructor = (user) => {
    console.log(user);
    fetch(
      `https://server-mehediinfo10101-gmailcom.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };

  return (
    <div className="py-10 mb-10">
      <h2 className="text-3xl text-center font-semibold"> All Users</h2>
      <div className="overflow-x-auto">
        <Fade>
          <table className="table">
            {/* head */}
            <thead className="text-center bg-white border">
              <tr>
                <th>SN</th>
                <th>User</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                <th>Action</th>
                {/* <th>Remove</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-16 h-16 rounded-full"
                      src={user.userProfile}
                      alt="user Image"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>

                  <td className="gap-3 ">
                    <button
                      disabled={user.role === "admin"}
                      onClick={() => handlemakeAdmin(user)}
                      className="btn btn-outline  w-36"
                    >
                      {" "}
                      Make Admin
                    </button>
                  </td>
                  <td>
                    <button
                      disabled={user.role === "instructor"}
                      onClick={() => handlemakeInstructor(user)}
                      className="btn btn-outline border-pink-600 text-pink-600 w-36 text-xs"
                    >
                      Make Instructor{" "}
                    </button>
                  </td>
                  {/* <td>
                            <button disabled={true} className='btn btn-outline border-pink-600 text-pink-600 w-32'>{user.role}</button>
                        </td>
                         */}
                </tr>
              ))}
            </tbody>
          </table>
        </Fade>
      </div>
    </div>
  );
};

export default ManageUsers;
