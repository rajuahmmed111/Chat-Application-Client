/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // login
    login: build.mutation({
      query: (data: any) => {
        return {
          url: `/auth/login`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    logout: build.mutation({
      query: () => {
        return {
          url: `/auth/logout`,
          method: "POST",
        };
      },
      invalidatesTags: ["Auth"],
    }),

    // register create client/ trainer
    registerTariner: build.mutation({
      query: (data: any) => {
        return {
          url: `/trainer/create-trainer`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    // genaral user
    registerClient: build.mutation({
      query: (data: any) => {
        return {
          url: `/client/create-client`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    // forgotten profile
    forgottenPassword: build.mutation({
      query: (data: any) => ({
        url: `/auth/forgot-password`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    // reset password profile
    resetPassword: build.mutation({
      query: (data: any) => ({
        url: `/auth/reset-password`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    // get me
    getMyProfile: build.query({
      query: () => ({
        url: `/auth/get-me`,
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),

    // change password
    changePassword: build.mutation({
      query: (data: any) => {
        return {
          url: `/auth/change-password`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useForgottenPasswordMutation,
  useChangePasswordMutation,
  useGetMyProfileQuery,
  useResetPasswordMutation,
  useRegisterTarinerMutation,
  useRegisterClientMutation,
} = authApi;
