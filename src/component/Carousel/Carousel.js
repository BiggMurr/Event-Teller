import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
import SliderImages from './SliderImages/slider1.png';
import SliderImage2 from './SliderImages/slider2.png';
import SliderImage3 from './SliderImages/slider3.png';
import SliderImage4 from './SliderImages/slider4.png'


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} interval={5000} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src={SliderImages} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={SliderImage2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={SliderImage3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={SliderImage4} />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;