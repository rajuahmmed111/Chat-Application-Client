import BackHomeButton from "./backHomeButton";
import Form from "./form";

export default function Registration() {
  return (
    <>
      <div className="bg-[#100C73] h-[60px]"></div>

      <div className="bg-[#F1F4F8] px-4 py-16">
        {/* Back Home Button */}
        <div className="ml-[20%] mb-7">
          <BackHomeButton />
        </div>

        <div className="flex justify-center items-center">
          <div className="max-w-[720px]  mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-black text-center mb-6">
              Register now and elevate your experience
            </h1>

            <p className="text-black text-center mb-12  text-sm md:text-base">
              &quot;Sign up today to unlock exclusive features and take your
              experience to the next level with enhanced tools and personalized
              options.&quot;
            </p>

            {/* form card */}
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
