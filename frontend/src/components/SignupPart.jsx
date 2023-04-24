import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import HeadAndSub from "./HeadAndSub";
import InputComponent from "./InputComponent";
import SignBottom from "./SignBottom";
import Signbutton from "./Signbutton";

function SignupComponent() {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.mobile || !user.place || !user.password || loading) return;
    setLoading(true);
    try {
      const { data } = await axios.post("/api/signup", user);
      console.log(data);
    } catch (error) {
      console.log(error.response);
      setErr(error?.response?.data?.error);
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
        <div className="w-screen sm:container mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-center items-center">
            <div className="py-10 sm:pt-28">
              <div className="rounded-lg sm:shadow-xl w-96 h-auto">
                <div className="px-10 sm:px-4">
                  <HeadAndSub head="Signup" sub="Hey, Let's get in" />
                  <form id="signupForm" onSubmit={handleSubmit}>
                    <p className="text-red-800">{err}</p>
                    <div>
                      <InputComponent type="text" id="name" value={user.name} setUser={setUser} placeholder="Enter Your Name" />
                      <InputComponent type="email" id="email" value={user.email} setUser={setUser} placeholder="Enter Your Email" />
                      <InputComponent type="number" id="mobile" value={user.mobile} setUser={setUser} placeholder="Enter Your Mobile" />
                      <InputComponent type="text" id="place" value={user.place} setUser={setUser} placeholder="Enter Your Place" />
                      <InputComponent type="password" id="password" value={user.password} setUser={setUser} placeholder="Enter Password" />
                      <Signbutton text="signup" loading={loading} />
                    </div>
                  </form>
                </div>
                <SignBottom text="already have an account?" loading={loading} link="/signin" btnText="signin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupComponent;
