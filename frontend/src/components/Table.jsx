import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import swal from "sweetalert";
import Navbar from './AdminNav'
import toast, { Toaster } from "react-hot-toast";

function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("admin");
    const getAllUsers = async () => {
      try {
        const { data } = await axios.get("/api/admin/users", { headers: { Authorization: token } });
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllUsers();
  }, []);

  const handleDelete = async (_id) => {
    swal({
      title: "Delete this user",
      text: `Are you sure you want to Delete this user?`,
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then(async (confirm) => {
      if (confirm) {
        const token = localStorage.getItem("admin");
        try {
          const { data } = await axios.delete(`/api/admin/users/${_id}`, { headers: { Authorization: token } });
          const newDetails = users.filter((per) => per._id !== _id);
          setUsers(newDetails);
          toast.success("user Deleted succesfully");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };


  return (
    <>
    <Navbar data={users}/>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
      <Toaster position="top-right" />
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              email
            </th>
            <th scope="col" className="px-6 py-3">
              mobile
            </th>
            <th scope="col" className="px-6 py-3">
              place
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.name}
              </th>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.mobile}</td>
              <td className="px-6 py-4">{user.place}</td>
              <td className="px-6 py-4 text-right">
                <a onClick={() => handleDelete(user._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Table;
