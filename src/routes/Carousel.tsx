import React, { useState } from 'react';
import Carousel1 from '../images/carousel1.jpeg';
import Carousel2 from '../images/carousel2.jpeg';
import Carousel3 from '../images/carousel3.jpeg';

const Carousel: React.FC = () => {
    const slides = [
        Carousel1,
        Carousel2,
        Carousel3
    ];

    const [carouselIndex, setCarouselIndex] = useState<number>(0);

    const goBack = () => {
        setCarouselIndex(prevIndex => {
            return (prevIndex === 0) ? slides.length - 1 : prevIndex - 1;
        });
    };

    const goNext = () => {
        setCarouselIndex(prevIndex => {
            return (prevIndex === slides.length - 1) ? 0 : prevIndex + 1;
        });
    };

    return (
        <div className="carousel-container">
            <button onClick={goBack}>Back</button>
            <button onClick={goNext}>Next</button>
            <img className="carousel-img" src={slides[carouselIndex]} alt="carousel"/>
        </div>
    );
}

export default Carousel;