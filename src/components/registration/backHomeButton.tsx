import Link from "next/link";
import React from "react";

const BackHomeButton = () => {
  return (
    <Link href="/" className="flex gap-1">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="arrow_back" clipPath="url(#clip0_261_4342)">
          <path
            id="Vector"
            d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
            fill="#323232"
          />
        </g>
        <defs>
          <clipPath id="clip0_261_4342">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <button className="text-[14px] sm:text-[16px] font-medium">
        Back to Home
      </button>
    </Link>
  );
};

export default BackHomeButton;
