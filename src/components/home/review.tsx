"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ReviewCard from "@/components/shared/reviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Autoplay} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper as SwiperCore } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Review() {
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

  return (
    <div className="bg-[#F1F4F8] h-[720px] relative">
      <div className="h-[350px]  bg-gradient-to-r from-[#100C73] via-[#07009F] to-[#100C73] lg:px-[470px]">
        <h2 className="text-center text-white text-2xl px-3 md:text-[40px] font-bold mb-4 pt-20">
          WHAT PEOPLE TALK ABOUT US
        </h2>
        <p className="text-center text-[16px] md:text-[24px] text-white/80 mb-12 px-2">
          Over the past seven years, people have consistently praised our
          services and expertise in their reviews.
        </p>
      </div>

      {/* bottom side */}
      <div className="container mx-auto -mt-[100px]">
        <Card className="bg-white rounded-3xl">
          <CardContent className="p-0">
            <div className="relative flex items-center justify-center pt-12 pb-4">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                breakpoints={{
                  600: {
                    slidesPerView: 1,
                    spaceBetween: 250,
                    autoHeight: true,
                  },

                  900: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },

                  1100: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
                className="lg:max-w-[1000px] mx-auto"
              >
                {testimonials.map((testimonial, idx) => (
                  <SwiperSlide key={idx} className="flex justify-center pb-10">
                    <div className="max-w-[300px] mx-auto">
                      <ReviewCard
                        name={testimonial.name}
                        title={testimonial.title}
                        content={testimonial.content}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={() => swiperInstance?.slidePrev()}
                className=" absolute lg:left-8 left-4 top-1/2 transform -translate-y-1/2 z-10  rounded-sm p-2 shadow-md border hidden md:block"
              >
                <ChevronLeft className="w-8 h-8 text-blue-600" />
              </button>
              <button
                onClick={() => swiperInstance?.slideNext()}
                className=" absolute lg:right-10 right-4 top-1/2 transform -translate-y-1/2 z-10  rounded-sm p-2 shadow-md border hidden md:block"
              >
                <ChevronRight className="w-8 h-8 text-blue-600" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
