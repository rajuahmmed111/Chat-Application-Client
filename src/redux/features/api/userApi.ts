import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: () => {
        return {
          url: "/users",
          method: "GET",
        };
      },
    }),
    getUserById: build.query({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllUserQuery, useGetUserByIdQuery } = userApi;
