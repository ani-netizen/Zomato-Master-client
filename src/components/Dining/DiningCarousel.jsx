import React, { useState } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../CarouselArrow";
import PictureCarouselCard from "../PictureCarouselCard";

function DiningCarousel() {
  const [dining] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/collections/28d243a9d5e5874fefa0f058f28555dd_1615460077.jpg",
      title: "Best of Mumbai",
      places: "150+ places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/28d243a9d5e5874fefa0f058f28555dd_1615460077.jpg",
      title: "Best of Mumbai",
      places: "150+ places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/28d243a9d5e5874fefa0f058f28555dd_1615460077.jpg",
      title: "Best of Mumbai",
      places: "150+ places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/28d243a9d5e5874fefa0f058f28555dd_1615460077.jpg",
      title: "Best of Mumbai",
      places: "150+ places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/28d243a9d5e5874fefa0f058f28555dd_1615460077.jpg",
      title: "Best of Mumbai",
      places: "150+ places",
    },
    {
      image:
        "https://b.zmtcdn.com/data/collections/28d243a9d5e5874fefa0f058f28555dd_1615460077.jpg",
      title: "Best of Mumbai",
      places: "150+ places",
    },
  ]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {dining.map((dining, index) => (
          <PictureCarouselCard {...dining} key={index} />
        ))}
      </Slider>
    </div>
  );
}

export default DiningCarousel;
