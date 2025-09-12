import { createApi } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";
import { baseQueryWithAuth } from "../../api";
import { ENDPOINTS } from "../../../constants/endpoints";
import { API_METHOD, REDUCER_PATH } from "../../../constants/common";

const authApi = createApi({
  reducerPath: REDUCER_PATH.AUTH_API,
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    // Login Mutation
    login: builder.mutation({
      query: (data) => ({
        url: `${ENDPOINTS.AUTH.BASE}${ENDPOINTS.AUTH.LOGIN}`,
        method: API_METHOD.POST,
        body: data,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          if (data.success) {
            toast.success("Welcome back!");
            localStorage.setItem("token", data.token);
          }
        } catch (error) {
          toast.error(error?.error?.data?.message);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
export default authApi;
