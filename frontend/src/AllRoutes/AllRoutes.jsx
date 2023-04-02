import React from "react";
import Mens from "../Components/alok_components/Mens";
import { Routes, Route } from "react-router-dom";

import Homepage from "../Components/KamranComponent/Homepage";
import NewAccount from "../Pages/AccountPage/SignUp";
import { Login } from "../Pages/AccountPage/Login";


import AdminUsers from "../Pages/AdminPage/AdminUsers";
import { AdminPage } from "../Pages/AdminPage/AdminPage";
import AdminProducts from "../Pages/AdminPage/AdminProducts";
import LoginAdmin from "../Pages/LoginAdmin/LoginAdmin";
import PrivateRouteAdmin from "../Pages/AdminPage/PrivateRoute/PrivateRouteAdmin";
import ProductOrder from "../Pages/AdminPage/Order";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/men" element={<Mens />} />
        <Route path="/women" />
        <Route path="/kids" />
        <Route path="/cart" />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<NewAccount />}></Route>

        {/* Admin Routing Starts From here */}

        <Route path="loginadmin" element={<LoginAdmin />} />
        <Route
          path="/admin"
          element={
            // <PrivateRouteAdmin>
            <AdminPage />
            // </PrivateRouteAdmin>
          }
        />
        <Route path="/adminusers" element={<AdminUsers />} />
        <Route path="/adminproducts" element={<AdminProducts />} />
        <Route path="/productsorder" element={<ProductOrder />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
