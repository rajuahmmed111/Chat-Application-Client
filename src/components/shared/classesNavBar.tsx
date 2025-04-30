/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import NavbarLogo from "@/assets/logos/navbar_logo.png";
import Link from "next/link";
import { Button } from "../ui/button";

const ClassesNavBar = () => {
  return (
    <header className="z-50">
      <div className="max-w-[1920px]  h-[100px] mx-auto 2xl:px-[300px] xl:px-[200px] lg:px-[150px] md:px-[100px] px-[50px] flex justify-between items-center bg-[#100C73]">
        <Link href="/" className="flex items-center gap-2">
          <Image src={NavbarLogo} alt="Logo" width={100} height={70} className="" />
        </Link>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:block bg-transparent text-[#E8D159] hover:text-white border-white hover:bg-white/10">
            View Classes
          </Button>
          <Button className="bg-[#F5B544] text-white hover:bg-[#F5B544]/90">Scheduled a Meeting</Button>
        </div>
      </div>
    </header>
  );
};

export default ClassesNavBar;
