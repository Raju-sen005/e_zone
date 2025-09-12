import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../../api"; // Axios/fetch wrapper with auth token
import { ENDPOINTS } from "../../../constants/endpoints"; // API URLs
import { API_METHOD, REDUCER_PATH } from "../../../constants/common"; // GET, PUT, DELETE, etc.

const userApi = createApi({
  reducerPath: REDUCER_PATH.USER_API, // Redux slice name
  baseQuery: baseQueryWithAuth,       // Base query with auth headers
  endpoints: (builder) => ({
    // Get all users
    getUsers: builder.query({
      query: () => ({
        url: `${ENDPOINTS.USERS}`,
        method: API_METHOD.GET,
      }),
      transformResponse: (response) => response, // Optional, just returns the backend response
    }),
    
    // Get single user by ID
    getUser: builder.query({
      query: (userId) => ({
        url: `${ENDPOINTS.USERS}/${userId}`,
        method: API_METHOD.GET,
      }),
      transformResponse: (response) => response,
    }),

    // Update a user
    updateUser: builder.mutation({
      query: ({ data, userId }) => ({
        url: `${ENDPOINTS.USERS}/${userId}`,
        method: API_METHOD.PUT,
        body: data, // e.g., { firstName, lastName, email, role }
      }),
    }),

    // Delete a user
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `${ENDPOINTS.USERS}/${userId}`,
        method: API_METHOD.DELETE,
      }),
    }),
  }),
});

// Hooks for React components
export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} = userApi;

export default userApi;
