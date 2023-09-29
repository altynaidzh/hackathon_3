import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const carouselContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const carouselStyle = {
  marginTop: "40px",
  maxWidth: "1300px",
  width: "100%",
  margin: "0 auto", // Центрируем карусель на странице
};

const imageStyle = {
  width: "100%", // Сделайте изображения адаптивными по ширине
  height: "auto", // Автоматическое масштабирование высоты
};

const CarouselComponent = () => {
  return (
    <div style={carouselContainerStyle}>
      <Carousel interval={3000} style={carouselStyle}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s9.travelask.ru/uploads/post/000/027/649/main_image/full-56024e81c255ba1de46e46127c355825.jpg"
            alt="Первый слайд"
            style={imageStyle}
          />
          <Carousel.Caption>
            <h5>Растения для балкона и сада</h5>
            <p>Придайте своему балкону и саду свежий вид!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://top10.travel/wp-content/uploads/2016/10/santa-mariya-della-salyute.jpg"
            alt="Второй слайд"
            style={imageStyle}
          />
          <Carousel.Caption>
            <h5>Почувствуй летний вайб</h5>
            <p>Мы празднуем все, что подарило нам летнее солнце</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lifeglobe.net/x/entry/0/different5-67.jpg"
            alt="Третий слайд"
            style={imageStyle}
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
