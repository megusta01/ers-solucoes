// components/ImageCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import styles from '../styles/ImgCarrossel.module.css';

interface CarouselItem {
    image: string;
    title: string;
    description: string;
}

interface ImageCarouselProps {
    items: CarouselItem[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    

    return (
        <div className={styles.carouselContainer}>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} className={styles.slide}>
                        <div className={styles.imageContainer}>
                            <img src={item.image} alt={`Slide ${index}`} className={styles.image} />
                        </div>
                        <div className={styles.textContainer}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};


export default ImageCarousel;