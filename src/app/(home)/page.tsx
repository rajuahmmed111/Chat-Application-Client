import BrokerPromo from "@/components/home/brokerPromo";
import Partner from "@/components/home/partner";
import RegularInfo from "@/components/home/regularInfo";
import Review from "@/components/home/review";

export default function Component() {
  return (
    <div className="">
      <BrokerPromo />
      <Review />
      <RegularInfo />
      <Partner />
    </div>
  );
}
