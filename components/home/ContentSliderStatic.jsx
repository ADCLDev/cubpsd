"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import categoryList from "../StaticData/CourseList";

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

const ContentSliderStatic = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  

  return (
    <div className="slider-container mx-10 lg:mx-auto lg:max-w-4xl xl:max-w-7xl my-20">
      <Slider {...settings}>
        {categoryList.map((category) => (
          <Link key={category.id} href={`/category/by_id/${category.id}`}>
            <div className="card w-[200px] bg-base-200 p-3">
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    <Image
                      width={50}
                      height={50}
                      src={category.image}
                      alt={category.name}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{category.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ContentSliderStatic;