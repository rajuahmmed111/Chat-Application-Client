import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

import RegularInfoImg from "@/assets/photos/certificate.png";

export default function RegulationInfo() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 relative">
      <h1 className="text-center text-4xl sm:text-5xl font-bold text-red-500 mb-8">
        WAIT!
      </h1>

      <p className="text-center max-w-4xl mx-auto mb-16 text-gray-700 leading-relaxed text-sm sm:text-base">
        In today&apos;s noisy social media landscape, finding trustworthy
        information can be difficult due to many unverified profiles. To
        clarify, My Financial Trading LLC is a regulated organization, meaning
        you&apos;re joining a reputable community. By becoming part of our
        group, you connect with one of the largest trading communities while
        accessing an authentic platform focused on your financial success. We
        prioritize transparency and integrity to ensure you feel confident as
        you start your trading journey.
      </p>

      <div className="grid md:grid-cols-2 gap-3 p-0 sm:p-5">
        {[1, 2].map((item) => (
          <Card key={item} className="overflow-hidden shadow-lg rounded-2xl">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col lg:flex-row gap-0 items-center">
                <div className="relative w-full lg:w-1/2">
                  <Image
                    src={RegularInfoImg}
                    alt="UAE Regulation Certificate"
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover rounded-md"
                  />
                  <Button className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-[#f4b41a] hover:bg-[#e5a718] text-white font-medium text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2">
                    View
                  </Button>
                </div>

                <div className="flex justify-center items-center w-full lg:w-1/2 lg:mt-0 mt-7">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold mb-2">
                      UAE Regulation Certificate
                    </h2>
                    <p className="text-gray-600 mb-4 text-xs sm:text-sm">
                      View key UAE regulations for your protection.
                    </p>

                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      {[1, 2, 3].map((bullet) => (
                        <div
                          key={bullet}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-[#f4b41a] flex-shrink-0" />
                          <span>Trading involves risk; trade responsibly.</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
