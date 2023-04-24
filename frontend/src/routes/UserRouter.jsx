import React from "react";
import { Routes, Route } from "react-router-dom";
import UserHome from "../pages/user/UserHome";
import UserSignin from "../pages/user/UserSignin";
import UserSignup from "../pages/user/UserSignup";
import Authenticated from "../utils/user/Authenticated";
import UnAuthenticated from "../utils/user/UnAuthenticated"

function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<Authenticated><UserHome/></Authenticated>} />
      <Route path="/signup" element={<UnAuthenticated><UserSignup /></UnAuthenticated>} />
      <Route path="/signin" element={<UnAuthenticated><UserSignin/></UnAuthenticated>} />
    </Routes>
  );
}

export default UserRouter;
