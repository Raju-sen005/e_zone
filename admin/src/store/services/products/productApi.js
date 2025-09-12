import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../../api"; // path check karo aapke folder structure ke hisaab se
import { ENDPOINTS } from "../../../constants/endpoints"; // path check karo
import { API_METHOD, REDUCER_PATH } from "../../../constants/common"; // path check karo

const productApi = createApi({
  reducerPath: REDUCER_PATH.PRODUCT_API,
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (formData) => ({
        url: `${ENDPOINTS.PRODUCTS}`,
        method: API_METHOD.POST,
        body: formData,
      }),
    }),
    getProducts: builder.query({
      query: () => ({
        url: `${ENDPOINTS.PRODUCTS}`,
        method: API_METHOD.GET,
      }),
    }),
    getProduct: builder.query({
      query: (productId) => ({
        url: `${ENDPOINTS.PRODUCTS}/${productId}`,
        method: API_METHOD.GET,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ data, productId }) => ({
        url: `${ENDPOINTS.PRODUCTS}/${productId}`,
        method: API_METHOD.PUT,
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `${ENDPOINTS.PRODUCTS}/${productId}`,
        method: API_METHOD.DELETE,
      }),
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetProductsQuery,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
export default productApi;
