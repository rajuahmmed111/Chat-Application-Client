/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import NavbarLogo from "@/assets/logos/navbar_logo.png";
import TauroLogo from "@/assets/logos/taruro_logo2.png";
import RegisterTradeNowButton from "./registerTradeNowButton";
// import Link from "next/link";

const TauroNavBar = () => {
  return (
    <header className="z-[999999]">
      <div className="h-[100px] mx-auto 2xl:px-[300px] xl:px-[200px] lg:px-[150px] md:px-[100px] px-[10px] flex justify-between items-center bg-[#100C73]">
        <div className="flex items-center gap-4">
          {/* <Link href="/" className="flex items-center gap-2"> */}
          <div className="md:border-r-2">
            <Image
              src={NavbarLogo}
              alt="Logo"
              width={100}
              height={70}
              className="mr-3"
            />
          </div>
          {/* </Link> */}

          <Image
            src={TauroLogo}
            alt="Logo"
            width={100}
            height={70}
            className="hidden md:block"
          />
        </div>

        <div className="flex">
          <RegisterTradeNowButton />
        </div>
      </div>
    </header>
  );
};

export default TauroNavBar;
