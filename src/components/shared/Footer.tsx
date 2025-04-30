import React from "react";
import FooterShape from "@/assets/photos/Shape-footer.png";
import FooterShadow from "@/assets/photos/Shadow.png";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { FooterLogo } from "../icons";

import Discord from "@/assets/icons/discord.png";
import Instagram from "@/assets/icons/instagram.png";
import Telegram from "@/assets/icons/telegram.png";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${FooterShape.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "337px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <div className="flex bg-[#0A142F] mx-2 rounded-lg lg:p-2 md:mx-5 md:p-5 xl:mx-0">
            <div className="max-w-[1074px] mx-auto h-auto xl:max-h-[200px]">
              <div className="flex flex-col xl:flex-row items-center justify-center h-full xl:gap-16 gap-5">
                <h2 className="text-white font-sans text-[24px] md:text-[28px] xl:text-[32px] px-7 font-normal text-center xl:text-left">
                  Subscribe to Newsletters
                </h2>

                <form className="flex flex-col sm:flex-row bg-white rounded w-full max-w-[400px] md:max-w-[510px] p-2 gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-4 rounded-md focus:outline-none focus:border-blue-500 text-sm md:placeholder:text-base"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full text-[16px] sm:w-auto px-5 py-2 md:px-6 md:py-2 bg-[#0081FE] text-white font-medium rounded-[4px] hover:bg-blue-600 transition-colors"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>

              <Image
                src={FooterShadow}
                className="mx-auto -mt-9 opacity-90 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[1074px]"
                alt="Footer shadow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer section main */}

      <footer className="bg-white px-6">
        <div className="container mx-auto">
          <div className="flex flex-col gap-6">
            {/* Navigation Links and Social Media */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
              {/* Navigation Links */}
              <nav className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 text-sm">
                <Link
                  className="text-[#0A142F] font-sans text-[14px] md:text-[16px] font-normal"
                  href="/about"
                >
                  About us
                </Link>
                <Link
                  className="text-[#0A142F] font-sans text-[14px] md:text-[16px] font-normal"
                  href="/discover"
                >
                  Discover
                </Link>
                <Link
                  className="text-[#0A142F] font-sans text-[14px] md:text-[16px] font-normal"
                  href="/explore"
                >
                  Explore
                </Link>
                <Link
                  className="text-[#0A142F] font-sans text-[14px] md:text-[16px] font-normal"
                  href="/books"
                >
                  Books
                </Link>
              </nav>

              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-end items-center gap-6 md:gap-8">
                <Link
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="hover:text-blue-600"
                >
                  <Image
                    src={Discord}
                    alt="Facebook"
                    className=" md:h-[32px] md:w-[80px]"
                  />
                </Link>
                <Link
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="hover:text-blue-400"
                >
                  <Image
                    src={Instagram}
                    alt="Twitter"
                    className="md:h-[32px] md:w-[80px]"
                  />
                </Link>
                <Link
                  href="https://vimeo.com"
                  aria-label="Vimeo"
                  className="hover:text-blue-300"
                >
                  <Image
                    src={Telegram}
                    alt="Vimeo"
                    className="md:h-[32px] md:w-[80px]"
                  />
                </Link>
                
              </div>
            </div>

            {/* Separator Line */}
            <Separator className="my-8 md:my-12" />

            {/* Footer Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#0A142F]/75">
              {/* Copyright Text */}
              <div className="text-center md:text-left font-sans text-[12px] md:text-[14px]">
                © {new Date().getFullYear()} My Financial Trading. All rights
                reserved.
              </div>

              {/* Footer Logo */}
              <div className="flex justify-center md:justify-end">
                <Image
                  src={FooterLogo}
                  alt="Footer logo"
                  height={56}
                  width={80}
                  className="object-contain"
                />
              </div>

              {/* Terms and Privacy Links */}
              <nav className="flex justify-center gap-6 md:gap-8">
                <Link
                  href="/terms"
                  className="text-[#0A142F] font-sans text-[12px] md:text-[14px] font-normal"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy"
                  className="text-[#0A142F] font-sans text-[12px] md:text-[14px] font-normal"
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
