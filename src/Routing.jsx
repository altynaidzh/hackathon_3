import React from "react";
import {Routes, Route} from "react-router-dom"
import ProductContextProvider from "./contexts/ProductContextProvider";
import CreateCategory from "./Pages/CreateCategory/CreateCategory";
import CreateProduct from "./Pages/CreateProduct/CreateProduct";
import EditTours from "./Pages/EditTours/EditTours";
import Details from "./Pages/ProductDetails/Details";
import Tours from "./Pages/Tours/Tours";
import UserTours from "./Pages/UserTours/UserTours";


const Routing = () => {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path="/" element={<Tours/>} />
        <Route path="/createCategory" element={<CreateCategory/>} />
        <Route path="/createProduct" element={<CreateProduct/>} />
        <Route path="/edit" element={<EditTours/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/userTours" element={<UserTours/>} />
      </Routes>
    </ProductContextProvider>
  );
};

export default Routing;
