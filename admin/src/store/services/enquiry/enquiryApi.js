import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../../api";
import { ENDPOINTS } from "../../../constants/endpoints";
import { API_METHOD, REDUCER_PATH } from "../../../constants/common";

const enquiryApi = createApi({
    reducerPath: REDUCER_PATH.ENQUIRY_API,
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        getEnquiries: builder.query({
            query: () => ({
                url: `${ENDPOINTS.ENQUIRIES}`,
                method: API_METHOD.GET,
            }),
            transformResponse: (response) => response,
        }),
    }),
});

export const { useGetEnquiriesQuery } = enquiryApi;
export default enquiryApi;
