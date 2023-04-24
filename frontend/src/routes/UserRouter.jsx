import React from "react";
import { Routes, Route } from "react-router-dom";
import SigninPart from "../components/SigninPart";
import UserSignin from "../pages/user/UserSignin";
import UserSignup from "../pages/user/UserSignup";

function UserRouter() {
  return (
    <Routes>
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/signin" element={<SigninPart/>} />
    </Routes>
  );
}

export default UserRouter;
