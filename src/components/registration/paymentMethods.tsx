import React from "react";

import PaymentMethod1 from "@/assets/icons/ApplePay.png";
import PaymentMethod2 from "@/assets/icons/Maestro.png";
import PaymentMethod3 from "@/assets/icons/visa.png";
import PaymentMethod4 from "@/assets/icons/Bitcoin.png";
import PaymentMethod5 from "@/assets/icons/paypal.png";
import Image from "next/image";

const PaymentMethods = () => {
  return (
    <div>
      <div className="space-y-2">
        <h2 className="text-[20px] font-medium mt-8">Payment Information</h2>
        <div className="flex justify-between flex-wrap items-center gap-4">
          <Image
            src={PaymentMethod1.src}
            alt="payment method"
            height={50}
            width={80}
            className="border-[6px] border-[#F2f4F7] p-2 rounded-xl w-20 h-14  object-fill"
          />
          <Image
            src={PaymentMethod2.src}
            alt="payment method"
            height={50}
            width={80}
            className="border-[6px] border-[#F2f4F7] p-2 rounded-xl w-20 h-14  object-fill"
          />
          <Image
            src={PaymentMethod3.src}
            alt="payment method"
            height={50}
            width={80}
            className="border-[6px] border-[#F2f4F7] p-2 rounded-xl w-20 h-14  object-fill"
          />
          <Image
            src={PaymentMethod4.src}
            alt="payment method"
            height={50}
            width={80}
            className="border-[6px] border-[#F2f4F7] p-2 rounded-xl w-20 h-14  object-fill"
          />
          <Image
            src={PaymentMethod5.src}
            alt="payment method"
            height={50}
            width={80}
            className="border-[6px] border-[#F2f4F7] p-2 rounded-xl w-20 h-14  object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
