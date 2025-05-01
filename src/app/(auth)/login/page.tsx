/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useLoginMutation } from "@/redux/features/api/authApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type FormValues = { email: string; password: string };

export default function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await login(data).unwrap();

      localStorage.setItem("token", res.token);

      reset();

      toast.success("Login successfully !");
      router.push("/");
    } catch (err: any) {
      toast.error(err?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 bg-white rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
        />
        <div className="relative">
          <input
            {...register("password", { required: true })}
            type={showPwd ? "text" : "password"}
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
          />
          <button
            type="button"
            onClick={() => setShowPwd((v) => !v)}
            className="absolute right-2 top-2 text-gray-500"
          >
            {showPwd ? "Hide" : "Show"}
          </button>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-600 text-white p-2 rounded disabled:opacity-50"
        >
          {isLoading ? "Logging in…" : "Login"}
        </button>
      </form>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useState } from "react";
// import { Eye, EyeOff, Mail } from "lucide-react";
// import Image from "next/image";
// import loginImg from "@/assets/login/login.png";
// import { useLoginMutation } from "@/redux/features/api/authApi";
// import toast from "react-hot-toast";
// import { useForm } from "react-hook-form";
// // import { useRouter } from "next/navigation";

// type FormValues = {
//   email: string;
//   password: string;
// };

// export default function LoginForm() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [login] = useLoginMutation();
//   // const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     // reset,
//     formState: { errors, isSubmitting },
//   } = useForm<FormValues>({
//     defaultValues: {
//       email: "",
//       password: "",
//       rememberMe: false,
//     },
//   });

//   const onSubmit = async (data: FormValues) => {
//     try {
//       const res = await login({ email, password }).unwrap();
//       const token = res.token; // valid
//       localStorage.setItem("token", token);

//       toast.success("User login successfully!");

//       // router.push("/user-verify");
//     } catch (error: any) {
//       console.error("Login failed:", error?.message || error);
//       toast.error("Failed to login user");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
//         <div className="hidden md:flex md:w-1/2 bg-[#f8f9fa] items-center justify-center p-8">
//           <Image
//             src={loginImg || "/placeholder.svg"}
//             alt="Login illustration"
//             width={400}
//             height={400}
//             className="object-contain"
//           />
//         </div>
//         <div className="w-full md:w-1/2 p-8">
//           <div className="max-w-md mx-auto">
//             <h1 className="text-2xl font-bold text-center mb-2">
//               Hello, Welcome!
//             </h1>
//             <p className="text-gray-600 text-center mb-8">
//               Please Enter Your Details Below to Continue
//             </p>

//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="mb-4">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-1"
//                 >
//                   Email
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                     <Mail className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     id="email"
//                     type="email"
//                     className={`pl-10 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                       errors.email ? "border-red-500" : ""
//                     }`}
//                     placeholder="Enter Email"
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                         message: "Invalid email address",
//                       },
//                     })}
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium mb-1"
//                 >
//                   Password
//                 </label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5 text-gray-400"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                     >
//                       <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
//                       <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//                     </svg>
//                   </div>
//                   <input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     className={`pl-10 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
//                       errors.password ? "border-red-500" : ""
//                     }`}
//                     placeholder="Enter password"
//                     {...register("password", {
//                       required: "Password is required",
//                       minLength: {
//                         value: 6,
//                         message: "Password must be at least 6 characters",
//                       },
//                     })}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute inset-y-0 right-3 flex items-center"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-5 w-5 text-gray-400" />
//                     ) : (
//                       <Eye className="h-5 w-5 text-gray-400" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="mt-1 text-sm text-red-600">
//                     {errors.password.message}
//                   </p>
//                 )}
//               </div>

//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center">
//                   <input
//                     id="rememberMe"
//                     type="checkbox"
//                     className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
//                     {...register("rememberMe")}
//                   />
//                   <label
//                     htmlFor="rememberMe"
//                     className="ml-2 block text-sm text-gray-600"
//                   >
//                     Remember me
//                   </label>
//                 </div>
//                 <a
//                   href="#"
//                   className="text-sm text-gray-600 hover:text-purple-500"
//                 >
//                   Forgot password?
//                 </a>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-70"
//               >
//                 {isSubmitting ? "Logging in..." : "Login"}
//               </button>
//             </form>

//             <div className="mt-6 text-center">
//               <p className="text-sm text-gray-600">Or Sign In with</p>
//               <button
//                 type="button"
//                 className="mt-3 w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   width="20"
//                   height="20"
//                 >
//                   <path
//                     fill="#4285F4"
//                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                   />
//                   <path
//                     fill="#34A853"
//                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                   />
//                   <path
//                     fill="#FBBC05"
//                     d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                   />
//                   <path
//                     fill="#EA4335"
//                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                   />
//                 </svg>
//                 Google
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
