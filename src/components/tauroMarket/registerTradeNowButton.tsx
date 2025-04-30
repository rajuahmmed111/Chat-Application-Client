"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import TauroLogo from "@/assets/logos/taruro_logo2.png";

const RegisterTradeNowButton = () => {
  return (
    <div>
      {/* Show this button on medium (md) and larger devices */}
      <Button className="bg-[#F5B544] rounded-[4px] text-white hover:bg-[#F5B544]/90 hidden md:block">
        Register & Trade Now
      </Button>
      
      {/* Show this logo image on small (sm) devices only */}
      <Image 
        src={TauroLogo}
        alt="Logo"
        width={100}
        height={70}
        className="block md:hidden"
      />
    </div>
  );
};

export default RegisterTradeNowButton;
