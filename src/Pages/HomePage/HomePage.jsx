import React from "react";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import Footer from "../../components/Footer/Footer";
import HomePhoto from "../../components/HomePhoto/HomePhoto";

const HomePage = () => {
  return (
    <>
      <CarouselComponent />
      <HomePhoto/>
      <Footer />
    </>
  );
};

export default HomePage;
