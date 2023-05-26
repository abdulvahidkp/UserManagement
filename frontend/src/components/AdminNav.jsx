import React from "react";
import { useNavigate } from "react-router-dom";
import { CSVLink } from 'react-csv'

function UserNavbar({data}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/admin/signin');
  }

  return (
    <div className="fixed w-full z-10 top-0 bg-white">
      <nav className="px-2 py-2.5 shadow-md ">
        <div className="w-screen sm:mt-0 sm:container flex flex-wrap justify-between items-center mx-auto">
          <div className="">
            <span className="text-bold text-xl sm:text-3xl italic font-semibold self-center cursor-pointer select-none">WEARE Admin</span>
          </div>
          <div className="items-center">
            <CSVLink className="bg-blue-700 text-white font-[Poppins] duration-500 p-1 sm:px-4 text-xs sm:text-lg sm:py-2 mx-1 sm:mx-4 hover:bg-blue-800 rounded" data={data} onClick={()=> {}} >EXPORT USERLIST</CSVLink>
            <button
              className="bg-emerald-700 text-white font-[Poppins] duration-500 p-1 sm:px-4 text-xs sm:text-lg sm:py-1 mx-1 sm:mx-4 hover:bg-emerald-800 rounded "
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default UserNavbar;
