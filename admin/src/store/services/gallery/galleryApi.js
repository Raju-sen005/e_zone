import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../../api";
import { ENDPOINTS } from "../../../constants/endpoints";
import { API_METHOD, REDUCER_PATH } from "../../../constants/common";

const galleryApi = createApi({
  reducerPath: REDUCER_PATH.GALLERY_API,
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    addGallery: builder.mutation({
  query: (data) => ({
    url: `${ENDPOINTS.GALLERY}`,
    method: API_METHOD.POST,
    body: data,  // 🚀 data yaha FormData hoga (frontend se bhejna h)
  }),
}),
    getGalleries: builder.query({
      query: () => ({
        url: `${ENDPOINTS.GALLERY}`,
        method: API_METHOD.GET,
      }),
      transformResponse: (response) => response,
    }),
    getGallery: builder.query({
      query: (galleryId) => ({
        url: `${ENDPOINTS.GALLERY}/${galleryId}`,
        method: API_METHOD.GET,
      }),
      transformResponse: (response) => response,
    }),
    updateGallery: builder.mutation({
  query: ({ data, galleryId }) => ({
    url: `${ENDPOINTS.GALLERY}/${galleryId}`,
    method: API_METHOD.PUT,
    body: data, // 🚀 FormData ke sath update hoga
  }),
}),
    deleteGallery: builder.mutation({
      query: (galleryId) => ({
        url: `${ENDPOINTS.GALLERY}/${galleryId}`,
        method: API_METHOD.DELETE,
      }),
    }),
  }),
});

export const {
  useAddGalleryMutation,
  useGetGalleriesQuery,
  useDeleteGalleryMutation,
  useUpdateGalleryMutation,
  useGetGalleryQuery,
} = galleryApi;
export default galleryApi;
