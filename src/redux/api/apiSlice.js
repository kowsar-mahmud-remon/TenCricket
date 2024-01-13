import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ten-cricket-server.vercel.app/api/v1",
  }),
  tagTypes: ["user", "cricket"],
  endpoints: () => ({}),
});
