import { api } from "../../api/apiSlice";

const cricketApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllCurrentMatches: build.query({
      query: () => "/cricketScoreboard/currentMatches",
      providesTags: ["cricket"],
    }),


  }),
});

export const {
  useGetAllCurrentMatchesQuery
} = cricketApi;
