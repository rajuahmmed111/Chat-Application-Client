"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const BrokerTradeButton = () => {
  return (
    <div>
      <Link href="/marketPlace">
        <Button className="text-white bg-[#f4b41a] hover:bg-[#e5a718] px-14 py-2 rounded-sm font-medium">
          Trade Now
        </Button>
      </Link>
    </div>
  );
};

export default BrokerTradeButton;
