import "react-phone-number-input/style.css";

import { Card, CardContent } from "@/components/ui/card";
import InputField from "./inputField";

const Form = () => {
  return (
    <div>
      <Card className="rounded-3xl overflow-hidden md:px-10">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Registration
          </h2>

          {/* form in input field */}
          <InputField />
        </CardContent>
      </Card>
    </div>
  );
};

export default Form;
