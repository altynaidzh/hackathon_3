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
  marginTop: "70px",
  width: "1100px",
};

const CarouselComponent = () => {
  return (
    <div style={carouselContainerStyle}>
      <Carousel interval={3000} style={carouselStyle}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://static.wixstatic.com/media/4d7d86_fd4cf52018ca48f389129de5e7a0cbcc~mv2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Туры В Европу Магазин</h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://static.wixstatic.com/media/4d7d86_fd4cf52018ca48f389129de5e7a0cbcc~mv2.jpg"
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
            src="http://soscroisiere.com/back/images/navires/slider/1costa_diadema20190314151209.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Закажите солнце в дом</h5>
            <p>Солнечный свет в сердце и в вазе</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://soscroisiere.com/back/images/navires/slider/1costa_diadema20190314151209.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Закажите солнце в дом</h5>
            <p>Солнечный свет в сердце и в вазе</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://static.wixstatic.com/media/4d7d86_fd4cf52018ca48f389129de5e7a0cbcc~mv2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Туры В Европу Магазин</h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
