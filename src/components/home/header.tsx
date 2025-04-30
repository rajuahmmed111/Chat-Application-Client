import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

import NavbarLogo from "@/assets/logos/navbar_logo.png";
// import VideoImg from "@/assets/photos/Fram48.png";
import BgImg from "@/assets/photos/Frame.png";

export default function Header() {
  return (
    <section
      className=" bg-cover bg-center w-full px-0 sm:px-20"
      style={{
        backgroundImage: `url(${BgImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="container overflow-hidden md:mb-16">
        <div className="space-y-10">
          <header className="pt-7">
            <div className=" flex justify-between items-center  px-[30px] sm:px-[0px] md:px-0 lg:px-16 xl:px-28 2xl:p-0">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={NavbarLogo}
                  alt="Logo"
                  width={100}
                  height={70}
                  className=""
                />
              </Link>

              <div className="flex items-center gap-4">
                <Link href="/classes">
                  <Button
                    variant="outline"
                    className="hidden sm:block bg-transparent text-[#E8D159] hover:text-white border-[#E8D159] hover:bg-white/10"
                  >
                    View Classes
                  </Button>
                </Link>
                <Button className="bg-[#F5B544] text-white hover:bg-[#F5B544]/90">
                  Scheduled a Meeting
                </Button>
              </div>
            </div>
          </header>

          <div className="">
            <main className="container mx-auto px-4 py-12 grid lg:grid-cols-2 gap-1 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10">
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <span className="text-white text-sm font-medium uppercase">
                    Let&apos;s Explore
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold ">
                  <span className="text-white">IT&apos;S ALL ABOUT</span>
                  <br />
                  <span className="text-yellow-500">MONEY</span>
                </h1>

                <div className="space-y-4 max-w-md">
                  <p className="text-white/90">
                    Get 100% FREE newsletter every day
                  </p>
                  <div className="flex bg-white p-2 rounded-md">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 text-[#0D0A5C] placeholder:text-[#0D0A5C]"
                      style={{
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                      }}
                    />
                    <Button className="bg-yellow-500 text-white hover:bg-yellow-600 whitespace-nowrap">
                      Get Started Today
                    </Button>
                  </div>
                </div>
              </div>

              <div className="md:flex-1 mt-10">
                <div className="aspect-video rounded-lg mb-6 relative">
                  <iframe
                    width="845"
                    height="500"
                    src="https://www.youtube.com/embed/VDbVXpJWA-k?si=C6jai8yzW3eTRrdi"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
