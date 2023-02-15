import { apiSlice } from "../apiSlice";

interface Model {
  object: string;
  id: string;
  ready: boolean;
  owner: "openai";
  permissions: unknown;
  created: unknown;
}

const modelApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getModels: build.query<Model[], void>({
      query: () => ({
        method: "GET",
        url: "/gpt/models",
      }),
    }),
  }),
});

export const { useGetModelsQuery } = modelApi;
