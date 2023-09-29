// import React, { Component } from 'react';
// import { Carousel } from 'react-bootstrap';


// import forestImg from './forest.jpg';

// class CarouselBox extends Component {
//     render() {
//         return (
//             <Carousel>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src={ ForestImg }
//                         alt="Forest"
//                     />
//                     <Carousel.Caption>
//                         <h3>Forest image</h3>
//                         <p>Lorem1</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 { }
//             </Carousel>
//         )
//     }
// }

// export default CarouselBox;

import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselComponent() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://1class.kg/wp-content/uploads/2022/06/tailand-1.png" // Замените на URL вашего изображения
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Slide 1</h3>
            <p>Some description for slide 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kochevnik.kg/wp-content/uploads/2019/08/3-1-1024x621.jpg" // Замените на URL вашего изображения
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Slide 2</h3>
            <p>Some description for slide 2</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default CarouselComponent;
  