import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";


// import ProductsContextProvider from "./contexts/productContext";
import AuthContextProvider from "./context/authContext";
import ProductsContextProvider from "./context/productContext";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import FavoriteContext from "./contexts/favoriteContext";

function App() {
  console.log("APP");
  return (
    <>
    
      <ProductsContextProvider>
        {/* <ToastContainer /> */}
        <AuthContextProvider>
          {/* <FavoriteContext> */}

          <Navbar />
          <Routing />

          {/* </FavoriteContext> */}
        </AuthContextProvider>
      </ProductsContextProvider>
    </>
  );
}

export default App;
