import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import HeadAndSub from "./HeadAndSub";
import InputComponent from "./InputComponent";
import SignBottom from "./SignBottom";
import Signbutton from "./Signbutton";

function SigninPart() {
  const initialState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setErr("");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password) return;
    setLoading(true);
    try {
      const { data } = await axios.post("/api/signin", user);
      console.log(data);
      localStorage.setItem('user',data)
      navigate('/')
    } catch (error) {
      console.log(error.message);
      setErr(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="pb-0 sm:pb-32">
        <div className="w-screen sm:container mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-center items-center">
            <div className="py-10 sm:pt-28">
              <div className="rounded-lg sm:shadow-xl w-96 h-auto">
                <div className="px-10 sm:px-4">
                  <HeadAndSub head="Signin" sub="Hello, welcome back" />
                  <form id="signinForm" onSubmit={handleSubmit}>
                    <p className="text-red-800">{err}</p>
                    <div>
                      <InputComponent type="email" id="email" value={user.email} setUser={setUser} placeholder="Email" />
                      <InputComponent type="password" id="password" value={user.password} setUser={setUser} placeholder="Password" />
                      <Signbutton text="signin" />
                    </div>
                  </form>
                </div>
                <SignBottom text="don't have an account?" loading={loading} link="/signup" btnText="signup" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SigninPart;
