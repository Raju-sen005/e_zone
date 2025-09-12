import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../../api";
import { ENDPOINTS } from "../../../constants/endpoints";
import { API_METHOD, REDUCER_PATH } from "../../../constants/common";

const blogApi = createApi({
  reducerPath: REDUCER_PATH.BLOG_API,
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
   addBlog: builder.mutation({
  query: (formData) => ({
    url: `${ENDPOINTS.BLOGS}`,
    method: API_METHOD.POST,
    body: formData, // FormData bhejo, JSON nahi
  }),
}),

    getblogs: builder.query({
      query: () => ({
        url: `${ENDPOINTS.BLOGS}`,
        method: API_METHOD.GET,
      }),
      transformResponse: (response) => response,
    }),
    getblog: builder.query({
      query: (blogId) => ({
        url: `${ENDPOINTS.BLOGS}/${blogId}`,
        method: API_METHOD.GET,
      }),
      transformResponse: (response) => response,
    }),
    updateBlog: builder.mutation({
      query: ({ data, blogId }) => ({
        url: `${ENDPOINTS.BLOGS}/${blogId}`,
        method: API_METHOD.PUT,
        body: data,
      }),
    }),
    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `${ENDPOINTS.BLOGS}/${blogId}`,
        method: API_METHOD.DELETE,
      }),
    }),
  }),
});

export const {
  useAddBlogMutation,
  useGetblogsQuery,
  useGetblogQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
export default blogApi;
