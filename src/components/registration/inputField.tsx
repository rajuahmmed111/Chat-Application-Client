/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateUserMutation } from "@/redux/features/api/userApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface IFormData {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  phone: string;
  userName: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string(), // Optional
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  phone: Yup.string().required("Phone number is required"),
  userName: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
});

const InputField = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(validationSchema),
  });

  const [createUser] = useCreateUserMutation();

  const router = useRouter();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    try {
      const res = await createUser(data).unwrap();
      console.log("User created:", res);

      reset();

      toast.success("User registered successfully!"); // ✅ Show success toast

      // redirect login page
      router.push("/login");
    } catch (error: any) {
      toast.error("Failed to register user"); // ✅ Show error toast
      console.error("Failed to create user:", error);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div className="flex gap-4 w-full">
          <div className="flex-1">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Your first name"
                  className="rounded-lg border-gray-200 focus-visible:ring-2 focus-visible:ring-blue-500"
                />
              )}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div className="flex-1">
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  placeholder="Your last name (optional)"
                  className="rounded-lg border-gray-200 focus-visible:ring-2 focus-visible:ring-blue-500"
                />
              )}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div>
          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                placeholder="Username"
                className="rounded-lg border-gray-200 focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            )}
          />
          {errors.userName && (
            <p className="text-red-500">{errors.userName.message}</p>
          )}
        </div>

        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                placeholder="Your email address"
                className="rounded-lg border-gray-200 focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                placeholder="Your password"
                className="rounded-lg border-gray-200 focus-visible:ring-2 focus-visible:ring-blue-500"
              />
            )}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInputWithCountrySelect
                {...field}
                defaultCountry="US"
                placeholder="Phone number"
                className="border rounded-lg shadow-sm p-2 text-gray-700 bg-white focus-within:ring-2 ring-blue-500"
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-[#1a237e] hover:bg-[#1a237e]/90 text-white py-6"
      >
        Registration
      </Button>
    </form>
  );
};

export default InputField;
