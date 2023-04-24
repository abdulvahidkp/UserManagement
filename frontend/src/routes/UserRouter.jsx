import React from "react";
import { Routes, Route } from "react-router-dom";
import UserSignin from "../pages/user/UserSignin";
import UserSignup from "../pages/user/UserSignup";

function UserRouter() {
  return (
    <Routes>
      <Route path="/signup" element={<UserSignup />} />
    </Routes>
  );
}

export default UserRouter;
