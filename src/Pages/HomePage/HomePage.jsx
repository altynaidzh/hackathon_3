import React from "react";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import Footer from "../../components/Footer/Footer";
import HomePhoto from "../../components/HomePhoto/HomePhoto";

const HomePage = () => {
  return (
    <>
      <CarouselComponent />
      <HomePhoto />   
      <Footer />
    </>
  );
};
// const HomePhoto = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   height: "80vh",
// };

// const carouselStyle = {
//   marginTop: "10px",
//   width: "1500px",
// };

export default HomePage;
