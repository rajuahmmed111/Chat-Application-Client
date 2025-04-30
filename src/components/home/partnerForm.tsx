"use client";

import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, Clock } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Define form data types
interface IPartnerForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  priorityDay: string;
  date: string;
  time: string;
}

// Define Yup validation schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  whatsappNumber: Yup.string().required("WhatsApp number is required"),
  priorityDay: Yup.string().required("Priority day is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
});

const PartnerForm = () => {
  const [date, setDate] = React.useState<Date>();
  const [time, setTime] = React.useState<string>();

  // Generate time options in 30-minute intervals
  const timeOptions = React.useMemo(() => {
    const times = [];
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 2; j++) {
        const hour = i % 12 || 12;
        const minute = j * 30;
        const ampm = i < 12 ? "AM" : "PM";
        times.push(`${hour}:${minute.toString().padStart(2, "0")} ${ampm}`);
      }
    }
    return times;
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IPartnerForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IPartnerForm> = (data) => {
    console.log("Form Data:", data);
  };

  // test

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* First Name */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1.5 block">
          Enter Your First Name
        </label>
        <Input
          type="text"
          placeholder="Enter your first name"
          {...register("firstName")}
          className="rounded-lg border-gray-200 py-[22px] px-[16px] placeholder:text-base focus:ring-2 focus:ring-[#1A197B] focus:outline-none"
        />
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1.5 block">
          Enter Your Last Name
        </label>
        <Input
          type="text"
          placeholder="Enter your last name"
          {...register("lastName")}
          className="rounded-lg border-gray-200 py-[22px] px-[16px] placeholder:text-base focus:ring-2 focus:ring-[#1A197B] focus:outline-none"
        />
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1.5 block">
          Enter email
        </label>
        <Input
          type="email"
          placeholder="Enter your email address"
          {...register("email")}
          className="rounded-lg border-gray-200 py-[22px] px-[16px] placeholder:text-base focus:ring-2 focus:ring-[#1A197B] focus:outline-none"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      {/* Phone Number */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1.5 block">
          Contact Number
        </label>
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <PhoneInputWithCountrySelect
              {...field}
              placeholder="(+1)123456789"
              defaultCountry="US"
              className="w-full rounded-lg border p-2 py-[10px] px-[14px]"
            />
          )}
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      {/* WhatsApp Number */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1.5 block">
          WhatsApp Number
        </label>
        <Controller
          control={control}
          name="whatsappNumber"
          render={({ field }) => (
            <PhoneInputWithCountrySelect
              {...field}
              placeholder="(+1)123456789"
              defaultCountry="US"
              className="w-full rounded-lg border p-2 py-[10px] px-[14px] "
            />
          )}
        />
        {errors.whatsappNumber && (
          <p className="text-red-500">{errors.whatsappNumber.message}</p>
        )}
      </div>

      {/* Priority Day */}
      <div>
        <label className="text-sm font-semibold text-gray-600 mb-1.5 block">
          Priority day
        </label>
        <Select {...register("priorityDay")}>
          <SelectTrigger className="py-[22px] px-[16px]">
            <SelectValue
              placeholder="Flexible"
              className="placeholder:text-base"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="flexible">Flexible</SelectItem>
            <SelectItem value="monday">Monday</SelectItem>
            <SelectItem value="tuesday">Tuesday</SelectItem>
            <SelectItem value="wednesday">Wednesday</SelectItem>
            <SelectItem value="thursday">Thursday</SelectItem>
            <SelectItem value="friday">Friday</SelectItem>
          </SelectContent>
        </Select>
        {errors.priorityDay && (
          <p className="text-red-500">{errors.priorityDay.message}</p>
        )}
      </div>

      {/* Date and Time */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="date"
            className="text-sm font-semibold text-gray-600 mb-1.5 block"
          >
            Pick date
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full flex-1 justify-between text-left font-normal py-[22px] px-[16px] placeholder:text-base focus:ring-2 focus:ring-[#1A197B] focus:outline-none",
                  !date && "text-muted-foreground"
                )}
              >
                <span className="flex-1  text-left text-[#9CA3AF]">
                  {date ? format(date, "dd/MM/yyyy") : "18/11/24"}
                </span>
                <CalendarIcon className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label
            htmlFor="Pick time"
            className="text-sm font-semibold text-gray-600 mb-1.5 block"
          >
            Pick time
          </label>
          <Select onValueChange={setTime}>
            <SelectTrigger
              className={cn(
                "w-full flex-1 py-[22px] px-[16px] placeholder:text-base focus:ring-2 focus:ring-[#1A197B] focus:outline-none",
                !time && "text-muted-foreground",
                "appearance-none"
              )}
            >
              <div className="flex items-center justify-between w-full text-[#9CA3AF]">
                <span>{time || "12:00 PM"}</span>
                <Clock className="ml-2 h-4 w-4 text-[#171717]" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {timeOptions.map((timeOption) => (
                <SelectItem key={timeOption} value={timeOption}>
                  {timeOption}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#1a237e] hover:bg-[#1a237e]/90 text-white py-6"
      >
        Schedule a Meeting
      </Button>
    </form>
  );
};

export default PartnerForm;

// "use client";

// import React from "react";
// import { useForm, SubmitHandler, Controller } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import PhoneInputWithCountrySelect from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// // Define form data types
// interface IPartnerForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   whatsappNumber: string;
//   priorityDay: string;
//   date: string;
//   time: string;
// }

// // Define Yup validation schema
// const validationSchema = Yup.object().shape({
//   firstName: Yup.string().required("First name is required"),
//   lastName: Yup.string().required("Last name is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   phone: Yup.string().required("Phone number is required"),
//   whatsappNumber: Yup.string().required("WhatsApp number is required"),
//   priorityDay: Yup.string().required("Priority day is required"),
//   date: Yup.string().required("Date is required"),
//   time: Yup.string().required("Time is required"),
// });

// const PartnerForm = () => {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<IPartnerForm>({
//     resolver: yupResolver(validationSchema),
//   });

//   const onSubmit: SubmitHandler<IPartnerForm> = (data) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//       {/* First Name */}
//       <div>
//         <label className="text-sm font-semibold text-gray-600 mb-1.5 block">
//           Enter Your First Name
//         </label>
//         <Input
//           type="text"
//           placeholder="Enter your first name"
//           {...register("firstName")}
//           className="rounded-lg border-gray-200 py-[22px] px-[16px] placeholder:text-base"
//         />
//         {errors.firstName && (
//           <p className="text-red-500">{errors.firstName.message}</p>
//         )}
//       </div>

//       {/* Last Name */}
//       <div>
//         <label className="text-sm font-semibold text-gray-600 mb-1.5 block">
//           Enter Your Last Name
//         </label>
//         <Input
//           type="text"
//           placeholder="Enter your last name"
//           {...register("lastName")}
//           className="rounded-lg border-gray-200 py-[22px] px-[16px] placeholder:text-base"
//         />
//         {errors.lastName && (
//           <p className="text-red-500">{errors.lastName.message}</p>
//         )}
//       </div>

//       {/* Email */}
//       <div>
//         <label className="text-sm font-semibold text-gray-600 mb-1.5 block">
//           Enter email
//         </label>
//         <Input
//           type="email"
//           placeholder="Enter your email address"
//           {...register("email")}
//           className="rounded-lg border-gray-200 py-[22px] px-[16px] placeholder:text-base"
//         />
//         {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//       </div>

//       {/* Phone Number */}
//       <div>
//         <label className="text-sm font-semibold text-gray-600 mb-1.5 block">
//           Contact Number
//         </label>
//         <Controller
//           control={control}
//           name="phone"
//           render={({ field }) => (
//             <PhoneInputWithCountrySelect
//               {...field}
//               placeholder="(+1)123456789"
//               defaultCountry="US"
//               className="w-full rounded-lg border p-2 py-[10px] px-[14px]"
//             />
//           )}
//         />
//         {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
//       </div>

//       {/* WhatsApp Number */}
//       <div>
//         <label className="text-sm font-semibold text-gray-600 mb-1.5 block">
//           WhatsApp Number
//         </label>
//         <Controller
//           control={control}
//           name="whatsappNumber"
//           render={({ field }) => (
//             <PhoneInputWithCountrySelect
//               {...field}
//               placeholder="(+1)123456789"
//               defaultCountry="US"
//               className="w-full rounded-lg border p-2 py-[10px] px-[14px]"
//             />
//           )}
//         />
//         {errors.whatsappNumber && (
//           <p className="text-red-500">{errors.whatsappNumber.message}</p>
//         )}
//       </div>

//       {/* Priority Day */}
//       <div>
//         <label className="text-sm font-semibold text-gray-600 mb-1.5 block">
//           Priority day
//         </label>
//         <Select {...register("priorityDay")}>
//           <SelectTrigger className="py-[22px] px-[16px]">
//             <SelectValue
//               placeholder="Flexible"
//               className="placeholder:text-base"
//             />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="flexible">Flexible</SelectItem>
//             <SelectItem value="monday">Monday</SelectItem>
//             <SelectItem value="tuesday">Tuesday</SelectItem>
//             <SelectItem value="wednesday">Wednesday</SelectItem>
//             <SelectItem value="thursday">Thursday</SelectItem>
//             <SelectItem value="friday">Friday</SelectItem>
//           </SelectContent>
//         </Select>
//         {errors.priorityDay && (
//           <p className="text-red-500">{errors.priorityDay.message}</p>
//         )}
//       </div>

//       {/* Date and Time */}
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <label className="text-sm font-semibold text-gray-600 mb-1.5 block">
//             Pick date
//           </label>
//           <Input
//             type="date"
//             placeholder="DD/MM/YYYY"
//             {...register("date")}
//             className="rounded-lg border-gray-200 py-[22px] px-[16px] placeholder:text-base"
//           />
//           {errors.date && <p className="text-red-500">{errors.date.message}</p>}
//         </div>

//         <div>
//           <label className="text-sm font-semibold text-gray-600 mb-1.5 block">
//             Pick time
//           </label>
//           <Select {...register("time")}>
//             <SelectTrigger className="py-[22px] px-[16px]">
//               <SelectValue
//                 placeholder="Select time"
//                 className="placeholder:text-base"
//               />
//             </SelectTrigger>
//             <SelectContent>
//               {[...Array(9)].map((_, i) => (
//                 <SelectItem key={i} value={`${i + 9}`}>
//                   {`${i + 9}:00 AM`}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           {errors.time && <p className="text-red-500">{errors.time.message}</p>}
//         </div>
//       </div>

//       <Button
//         type="submit"
//         className="w-full bg-[#1a237e] hover:bg-[#1a237e]/90 text-white py-6"
//       >
//         Schedule a Meeting
//       </Button>
//     </form>
//   );
// };

// export default PartnerForm;
