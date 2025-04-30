import "react-phone-number-input/style.css";

import { Card, CardContent } from "@/components/ui/card";
import PartnerImg from "@/assets/photos/partner_bg.png";
import PartnerForm from "./partnerForm";

export default function Partner() {
  //   const { control } = useForm();

  return (
    <div
      className="bg-[#1a237e] px-4 py-16 relative "
      style={{
        backgroundImage: `url(${PartnerImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="max-w-4xl border-red-200 mx-auto">
        <h1 className="text-3xl md:text-[45px] font-bold text-white text-center mb-6">
          Become Our Partner
        </h1>

        <p className="text-white/80 text-center mb-12 text-sm md:text-base leading-[32px]">
          If your busy schedule makes trading difficult, you can still get
          involved by partnering with us for an initial investment of just
          $10,000. This allows you to make the most of our expertise while you
          focus on your other commitments. By partnering with us, you&apos;ll
          benefit from professional trading strategies, maximizing your
          investment without needing to engage in the markets daily. Take this
          opportunity for financial growth while effectively managing your time.
        </p>

        <Card className="lg:rounded-[20px] rounded-[10px] border border-blue-300 overflow-hidden lg:px-28">
          <CardContent className="md:p-8">
            <h2 className="text-2xl md:text-[36px] font-semibold text-center mb-8">
              Schedule a meeting
            </h2>

            {/* Partner Form */}
            <PartnerForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
