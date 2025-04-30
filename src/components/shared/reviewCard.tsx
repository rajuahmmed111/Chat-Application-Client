"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import CardBg from "@/assets/photos/card_bg.png";
import Profile1 from "@/assets/profile/profile_1.png";

interface TestimonialCardProps {
  name: string;
  title: string;
  content: string;
}

const ReviewCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  content,
}) => {
  return (
    <Card
      className="lg:w-[300px] lg:h-[360px]  overflow-hidden rounded-2xl px-5 pt-16 pb-5 relative"
      style={{
        backgroundImage: `url(${CardBg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="absolute w-20 h-20 top-5 left-[104px]">
      {/* <div className="absolute w-20 h-20 top-5 left-[104px]"> */}
        <Image
          src={Profile1.src}
          alt="Profile"
          width={80}
          height={80}
          className="rounded-full border-4 border-white"
        />
      </div>

      <CardContent className="p-0 bg-white rounded-2xl">
        <div className="relative pt-10 px-4 pb-4 text-center">
          {/* Star Rating */}
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#100c73]" />
            ))}
          </div>

          <p className="text-gray-600 mb-2 text-sm">{content}</p>

          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
