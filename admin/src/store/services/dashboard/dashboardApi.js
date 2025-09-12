import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../../api";
import { ENDPOINTS } from "../../../constants/endpoints";
import { API_METHOD, REDUCER_PATH } from "../../../constants/common";

const dashboardApi = createApi({
    reducerPath: REDUCER_PATH.DASHBOARD_API,
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        dashboardAnalysis: builder.query({
            query: () => ({
                url: `${ENDPOINTS.DASHBOARD}`,
                method: API_METHOD.GET,
            }),
            transformResponse: (response) => response.data,
        }),
    }),
});

export const { useDashboardAnalysisQuery } = dashboardApi;
export default dashboardApi;