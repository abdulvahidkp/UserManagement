import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminHome from "../pages/admin/AdminHome";
import AdminSignin from "../pages/admin/AdminSignin";
import Authenticated from "../utils/admin/Authenticated";
import UnAuthenticated from "../utils/admin/UnAuthenticated"

function AdminRouter() {
  return (
    <Routes>
      <Route path="/signin" element={<UnAuthenticated><AdminSignin /></UnAuthenticated>} />
      <Route path="/" element={<Authenticated><AdminHome /></Authenticated>} />
    </Routes>
  );
}

export default AdminRouter;
