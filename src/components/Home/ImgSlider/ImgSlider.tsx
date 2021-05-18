import React from 'react'
import { Carousel, Wrap } from './ImgSlider.styles'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//react slick -> to make ssliders
type Settings = {
    dots: boolean,
    infinite: true,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number,
    autoplay: boolean,
}  

export default function ImgSlider() {

    let settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src='/images/slider-badging.jpg' />
            </Wrap>
            <Wrap>
                <img src='/images/slider-badag.jpg' />
            </Wrap>
        </Carousel>
    )
}
