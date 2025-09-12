import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import envConfig from "../config/envConfig";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: envConfig.BASE_URL,
  prepareHeaders: (headers, { getState, endpoint, type, forced }) => {
    // Prefer token from Redux state; fall back to localStorage if needed
    const token =
      getState()?.auth?.token ||
      (typeof window !== "undefined" ? localStorage.getItem("token") : null);

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
  // 🚀 IMPORTANT: Auto Content-Type fix
  fetchFn: async (input, init) => {
    // Agar FormData bhej rahe hain to Content-Type mat lagao
    if (init?.body instanceof FormData) {
      if (init.headers) {
        // delete explicit content-type
        delete init.headers["Content-Type"];
      }
    }
    return fetch(input, init);
  },
});

export const baseQueryWithAuth = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");

      const currentPath = window.location.pathname;
      if (currentPath !== "/login") {
        window.location.assign("/login");
      }
    }
  }

  return result;
};
