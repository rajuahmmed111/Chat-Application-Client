import Image from "next/image";
import { Card } from "@/components/ui/card";

import BrokerImg from "@/assets/photos/broker_promo.png";
import BrokerTradeButton from "./brokerTradeButton";

export default function BrokerPromo() {
  return (
    <section className="my-16">
      <div className="container mx-auto p-4">
        <h1 className="text-center text-2xl md:text-[40px] font-bold mb-8 md:px-20 leading-[48px]">
          Trade With Our Recommended Broker and Unlock Free VIP Access!
        </h1>

        <Card className="p-8 border-2 border-[#1a237e] rounded-2xl">
          <div className="flex flex-col items-center gap-6">
            <div className="w-48 md:w-64">
              <Image
                src={BrokerImg}
                alt="Tauro Markets Logo"
                width={240}
                height={80}
                className="w-full h-auto"
              />
            </div>

            <p className="text-center text-lg text-muted-foreground">
              Get 30% Trade Credit and Free Community Access when you join
              <span className="block">Tauro Markets !</span>
            </p>

            {/* Broker Trade Now Button */}
            <BrokerTradeButton />
          </div>
        </Card>
      </div>
    </section>
  );
}
