import React from 'react';

import Image from "next/image";
import BenefitIcon from "@/assets/icons/benefit_icon.png";

const StarWithLogo = () => {
    return (
        <div className="mt-8 flex items-center gap-4">
                <div>
                  <Image src={BenefitIcon} alt="Benefits icon" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">
                    {" "}
                    <sub className="text-4xl text-green-400">★</sub>{" "}
                    <sub className="text-xl">Trustpilot</sub>{" "}
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, star) => (
                        <div
                          key={star}
                          className="flex items-center justify-center bg-[#00B67A] p-[1px] ml-1 mt-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            width="17"
                            height="17"
                          >
                            <path d="M12 2l2.834 7.922h8.342l-6.756 4.898 2.834 7.922L12 17.846l-6.756 4.896 2.834-7.922L1.322 9.922h8.342L12 2z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <span className="text-2xl font-bold">4.5</span>
                  </div>
                </div>
              </div>
    );
};

export default StarWithLogo;