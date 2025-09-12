import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../../api";
import { ENDPOINTS } from "../../../constants/endpoints";
import { API_METHOD, REDUCER_PATH } from "../../../constants/common";

const orderApi = createApi({
    reducerPath: REDUCER_PATH.ORDER_API,
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => ({
                url: `${ENDPOINTS.ORDERS}`,
                method: API_METHOD.GET,
            }),
            transformResponse: (response) => response,
        })
    }),
});

export const { useGetOrdersQuery } = orderApi;
export default orderApi;