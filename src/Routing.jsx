import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
// user
// import Loader from "./components/Loader/Loader";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
// import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";
// product
import CreateCategory from "./Pages/CreateCategory/CreateCategory";
import CreateProduct from "./Pages/CreateProduct/CreateProduct";
import Tours from "./Pages/Tours/Tours";
import UserTours from "./Pages/UserTours/UserTours";
import EditTours from "./Pages/EditTours/EditTours";
import DetailPage from "./Pages/DetailPage/DetailPage";


const PrivateRoutes = () => {
  const user = localStorage.getItem("email");

  return user ? (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

const Routing = () => {
  return (
    <Routes>
      {/* users routes */}
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      {/* products routes */}
      <Route element={<PrivateRoutes />}>
        {/* <Route path="*" element={<Loader />} /> */}
        <Route path="/create-category" element={<CreateCategory />} />
        <Route path="/product-detail/:id" element={<DetailPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/user-products" element={<UserTours />} />
        <Route path="/edit-product/:id" element={<EditTours />} />

      </Route>
    </Routes>
  );
};

export default Routing;
