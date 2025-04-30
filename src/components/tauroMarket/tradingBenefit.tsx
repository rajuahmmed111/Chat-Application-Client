import TauroCoverImg from "@/assets/photos/tauro.png";
import Link from "next/link";
import Image from "next/image";
import StarWithLogo from "./starWithLogo";
import RegisterTradeNowButton from "./registerTradeNowButton";

export default function TradingBenefits() {
  return (
    <>
      {" "}
      <div className="relative bg-white">
        <div className="">
          <div className="relative flex lg:h-[750] flex-col lg:flex-row items-center">
            {/* Left content section */}
            <div className="relative lg:absolute z-10 w-full lg:w-[60%] xl:w-[50%]  pl-5 pr-5 sm:pr-0 md:pl-16 lg:pl-10 py-12   bg-[#100C73] rounded-none lg:rounded-[0px_400px_400px_0px] text-white">
              <div className="lg:w-[95%] xl:w-[80%]">
                <h1 className="text-2xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:w-[80%] xl:w-[95%] text-wrap">
                  Benefits of trading with our{" "}
                  <span className="text-yellow-400">partner broker !</span>
                </h1>

                <p className="mb-8 text-lg sm:text-2xl lg:max-w-[90%] xl:max-w-full font-normal">
                  Register to receive unlimited 30% bonus on deposits of 500 USD
                  or more
                </p>

                <div className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                    What you need to do:
                  </h2>
                  <ul className="space-y-3 pl-3">
                    <li className="flex items-center gap-4 text-md sm:text-lg md:text-xl font-normal">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      Open a TAURO account
                    </li>
                    <li className="flex items-center gap-4 text-md sm:text-lg md:text-xl font-normal">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      Get Bonus up to $1000
                    </li>
                    <li className="flex items-center gap-4 text-md sm:text-lg md:text-xl font-normal">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      Place a Trade
                    </li>
                  </ul>
                </div>

                <Link
                  href="/register"
                  
                >
                  <RegisterTradeNowButton />
                </Link>

                {/* star and logo */}
                <StarWithLogo />
              </div>
            </div>

            {/* Right image section */}
            <div className="w-full lg:w-[77%] h-[300px] sm:h-[400px] md:h-[600px]  order-first overflow-hidden lg:h-full bg-red-600 ml-auto">
              <Image
                className="object-cover lg:object-top w-full h-full"
                src={TauroCoverImg}
                alt="Professional trader"
                placeholder="blur"
                sizes="(max-width: 100px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
