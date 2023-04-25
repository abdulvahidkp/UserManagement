import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import HeadAndSub from "./HeadAndSub";
import InputComponent from "./InputComponent";
import SignBottom from "./SignBottom";
import Signbutton from "./Signbutton";
import toast, { Toaster } from "react-hot-toast";

function MyProfile() {
  const initialState = {
    name: "",
    email: "",
    mobile: "",
    place: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [readOnly, setReadOnly] = useState(true);
  const [userDetails, setUserDetails] = useState(initialState);

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("user");
    if (!token) navigate("/signin");
    const getUserDatas = async () => {
      try {
        const { data } = await axios.get("/api/user", { headers: { Authorization: token } });
        console.log(data);
        setUser(data);
        setUserDetails(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUserDatas();
  }, []);

  const handleCancel = () => {
    setReadOnly(true);
    setUser(userDetails);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.mobile || !user.place || loading) return;
    setLoading(true);
    let token = localStorage.getItem('user')
    try {
      const { data } = await axios.post("/api/user", user,{headers:{Authorization:token}});
        setUser(data);
        setUserDetails(data)
        setReadOnly(true)
        toast.success("profile updated successfully");
    } catch (error) {
      console.log(error.message);
      setErr(error?.response?.data?.error || error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setErr("");
  }, [user]);

  return (
    <section>
      <div className="pb-0 sm:pb-32">
        <Toaster position="top-right" />
        <div className="w-screen mt-8 sm:mt-0 sm:container mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-center items-center">
            <div className="py-10 sm:pt-28">
              <div className="rounded-lg sm:shadow-xl w-96 h-auto">
                <div className="px-10 sm:px-4 py-3">
                  <HeadAndSub head="My Details" />
                  <form id="myProfileForm" onSubmit={handleUpdate}>
                    <p className="text-red-800">{err}</p>
                    <div>
                      <InputComponent type="text" id="name" value={user.name} setUser={setUser} placeholder="Enter Your Name" readOnly={readOnly} />
                      <InputComponent type="email" id="email" value={user.email} setUser={setUser} placeholder="Enter Your Email" readOnly={readOnly} />
                      <InputComponent type="number" id="mobile" value={user.mobile} setUser={setUser} placeholder="Enter Your Mobile" readOnly={readOnly} />
                      <InputComponent type="text" id="place" value={user.place} setUser={setUser} placeholder="Enter Your Place" readOnly={readOnly} />
                      {!readOnly ? (
                        <>
                          <button
                            type="button"
                            className="bg-red-700 text-white font-[Poppins] mr-3 duration-500 p-1 sm:px-4 py-0 text-xs sm:text-lg sm:py-1 hover:bg-red-800 rounded"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                          <button type="submit" className="bg-blue-700 text-white font-[Poppins] duration-500 p-1 sm:px-4 py-0 text-xs sm:text-lg sm:py-1 hover:bg-blue-800 rounded">
                            Update
                          </button>
                        </>
                      ) : (
                        <button
                          type="button"
                          className="bg-blue-700 text-white font-[Poppins] duration-500 p-2 px-6 p sm:px-4  text-xs sm:text-lg sm:py-1 hover:bg-blue-800 rounded"
                          onClick={() => setReadOnly(false)}
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyProfile;
