"use client";

import { ChevronDown, ChevronRight, Clock } from "lucide-react";
import * as React from "react";

import VideoImg from "@/assets/photos/Fram48.png";

import {} from "@/components/ui/collapsible";
import Image from "next/image";

export default function Component() {
  return (
    <section className="bg-[#F1F4F8]  z-10">
      <div className="max-w-[1920px] mx-auto">
        <div className="2xl:px-[300px] xl:px-[200px] lg:px-[150px] md:px-[100px] px-[10px] flex flex-col-reverse lg:flex-row p-4 md:p-6 gap-6 md:gap-10">
          {/* Sidebar */}
          <div className="lg:w-1/3 bg-white border-2  rounded-2xl overflow-hidden mb-4 md:mb-0">
            <div className="bg-[#1a1464] p-4 text-white font-semibold">All Courses & Videos</div>
            <nav className="p-2">
              {sections.map((section) => (
                <div key={section.title} className="mb-1">
                  <div className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <span className="text-sm">{section.title}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{section.videos} videos</span>
                      {section.isExpanded ? (
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                  {section.isExpanded && section.lessons && (
                    <div className="ml-2">
                      {section.lessons.map((lesson) => (
                        <div
                          key={lesson.title}
                          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                        >
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm flex-grow">{lesson.title}</span>
                          <span className="text-xs text-gray-500">{lesson.duration}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="w-full md:flex-1 z-0">
            <div className="aspect-video rounded-lg mb-6 ">
              <Image src={VideoImg} alt="Course video" height={500} width={845} />
            </div>

            <h1 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Market-components- Class 1</h1>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-2 md:mb-4">
                In this ultimate trading masterclass, you will learn how to master trading as a beginner in 2024. I will
                reveal the exact steps that you need to take to become consistently profitable while every other retail
                trader remains a losing trader. Learn exactly how to make over $5k to $50k/mth trading and live your
                dream life. Discover proven mechanical trading that work, risk management secrets, and the mindset of a
                professional trader.
              </p>
              <p className="text-gray-700">
                This is your blueprint to escape the unfair market manipulation and join the winning side of the market.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

const sections = [
  {
    title: "Behavior",
    videos: 1,
  },
  {
    title: "Market Components",
    videos: 3,
    isExpanded: true,
    lessons: [
      { title: "How to Master Forex Trading", duration: "15:45" },
      {
        title: "ULTIMATE Candlestick Pattern Trading Guide",
        duration: "22:30",
      },
      { title: "Market Structure Simplified", duration: "15:15" },
    ],
  },
  {
    title: "Major-Minor Levels",
    videos: 1,
  },
  {
    title: "Highs-Lows Misconception",
    videos: 1,
  },
  {
    title: "Market Structures",
    videos: 1,
  },
  {
    title: "Continuation Structures",
    videos: 1,
  },
  {
    title: "Reversal Structures",
    videos: 1,
  },
  {
    title: "Double-Top-Bottom",
    videos: 1,
  },
  {
    title: "Prediction-Reaction",
    videos: 1,
  },
  {
    title: "Placing Orders",
    videos: 1,
  },
];
