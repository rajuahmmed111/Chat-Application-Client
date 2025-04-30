"use client";

import React, { useEffect, useState } from "react";
import ReviewCard from "@/components/shared/reviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper as SwiperCore } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from 'swiper/modules';


const ReviewSlider = () => {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperCore | null>(
    null
  );

  const testimonials = [
    {
      id: 1,
      name: "Hugo Ninrow",
      title: "District Security Agent",
      content:
        "I have been using this software for over a year now and I love it! I can't imagine life without it. It's so easy to use.",
    },
    {
      id: 2,
      name: "Jane Doe",
      title: "Project Manager",
      content:
        "The software has streamlined our process significantly. The user experience is excellent, and I highly recommend it to other teams.",
    },
    {
      id: 3,
      name: "John Smith",
      title: "Business Analyst",
      content:
        "This tool has been a game changer for our workflow. Support is responsive and the features are robust.",
    },
    {
      id: 3,
      name: "John Smith",
      title: "Business Analyst",
      content:
        "This tool has been a game changer for our workflow. Support is responsive and the features are robust.",
    },
  ];

  const [slide, setSlide] = useState(3);

  const updateSlideCount = () => {
    const width = window.innerWidth;

    if (width < 640) {
      // Small screens
      setSlide(1);
    } else if (width >= 640 && width < 1024) {
      // Medium screens
      setSlide(2);
    } else {
      // Large screens
      setSlide(3);
    }
  };

  useEffect(() => {
    // Set initial slide count based on current window size
    updateSlideCount();

    // Update slide count on window resize
    window.addEventListener("resize", updateSlideCount);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlideCount);
    };
  }, []);



  return (
    <div className="relative ">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={slide}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="mySwiper"
      >
        {testimonials.map((testimonial, idx) => (
          <SwiperSlide key={idx} className="">
            <ReviewCard
              name={testimonial.name}
              title={testimonial.title}
              content={testimonial.content}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className=" absolute lg:left-8 left-4 top-1/2 transform -translate-y-1/2 z-10  rounded-sm p-2 shadow-md border"
      >
        <ChevronLeft className="w-8 h-8 text-blue-600" />
      </button>
      <button
        onClick={() => swiperInstance?.slideNext()}
        className=" absolute lg:right-10 right-5 top-1/2 transform -translate-y-1/2 z-10  rounded-sm p-2 shadow-md border"
      >
        <ChevronRight className="w-8 h-8 text-blue-600" />
      </button>
    </div>
  );
};

export default ReviewSlider;
