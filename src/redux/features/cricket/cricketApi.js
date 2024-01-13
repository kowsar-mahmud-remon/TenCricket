import { api } from "../../api/apiSlice";

const cricketApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllCurrentMatches: build.query({
      query: () => "/currentMatches",
      providesTags: ["cricket"],
    }),


  }),
});

export const {
  useGetAllCurrentMatchesQuery
} = cricketApi;
