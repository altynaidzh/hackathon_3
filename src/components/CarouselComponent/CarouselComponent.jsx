import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const carouselContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
};

const carouselStyle = {
  marginTop: "10px",
  width: "1500px",
};

const CarouselComponent = () => {
  return (
    <div style={carouselContainerStyle}>
      <Carousel interval={3000} style={carouselStyle}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://avatars.mds.yandex.net/i?id=83a1dfd5f8df1565c13b76b97e72b2a2-5169729-images-thumbs&n=13"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Растения для балкона и сада</h5>
            <p>Придайте своему балкону и саду свежий вид!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/blume2000/image/upload/c_fill,dpr_1,f_webp,fl_progressive:steep,q_auto:eco,g_auto,w_1360,h_638/v1686587063/cms/Sommer_23_2.webp"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Почувствуй летний вайб</h5>
            <p>Мы празднуем все, что подарило нам летнее солнце</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/blume2000/image/upload/c_fill,dpr_1,f_webp,fl_progressive:steep,q_auto:eco,g_auto,w_1360,h_638/v1687768071/cms/Sonnenblumen_3.webp"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Закажите солнце в дом</h5>
            <p>Солнечный свет в сердце и в вазе</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
