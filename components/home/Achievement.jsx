"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

// Custom arrow component for next button
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
};

const Achievement = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <div className="slider-container mx-10 lg:mx-auto lg:max-w-4xl xl:max-w-7xl my-20 gap-4">
      <Slider {...settings}>

      <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3 gap-4">
        <p className="font-bold text-xl py-5">Students Choose Professional Skill Development Center</p>
        <p className="text-base">World-class faculty and cutting-edge curriculum. State-of-the-art facilities with hands-on learning experiences. Global perspective with diverse community. Powerful alumni network for mentorship and opportunities.</p>
      </div>

      <div className="flex flex-col px-8 py-10 bg-rose-100 rounded-3xl mx-3">
        <p className="font-bold text-xl py-5">Got Career Placement</p>
        <p className="text-base">World-class education with innovative curriculum and hands-on learning. Diverse global community fosters success. Extensive alumni network provides unparalleled career opportunities. Over 90% of graduates secure top placements. Choose us to maximize your potential.</p>
      </div>

      <div className="flex flex-col px-8 py-10 bg-cyan-100 rounded-3xl mx-3">
        <p className="font-bold text-xl py-5">High Success Rate</p>
        <p className="text-base">Innovative curriculum taught by renowned faculty. State-of-the-art facilities enabling hands-on learning. Global alumni network offering unrivaled opportunities.High number of graduates thriving in their chosen fields. Choose us for your skill development journey and assured success</p>
      </div>

      <div className="flex flex-col px-8 py-10 bg-green-100 rounded-3xl mx-3">
        <p className="font-bold text-xl py-5">Works As Expert Freelancer</p>
        <p className="text-base">Master in-demand skills from industry experts. Cutting-edge curriculum with real-world projects. Global networking opportunities. Huge number of alumni thriving as freelance consultants and entrepreneurs. Study with us to become a top freelancer.</p>
      </div>


      </Slider>
    </div>
  );
};

export default Achievement;