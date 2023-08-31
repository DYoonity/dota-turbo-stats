import { createApi, fetchBaseQuery, createEntityAdapter } from '@reduxjs/toolkit/query/react';

export const openDotaApiSlice = createApi({
    reducerPath: 'openDotaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.opendota.com/api/' }),
    endpoints: build => ({
        getHeroMatches: build.query({
            query: (heroId) => `heroes/${heroId}/matches`,
        }),
        getMatch: build.query({
            query: (matchId) => `/matches/${matchId}`,
        }),

    }),
});

// Custom generated hooks
export const { useGetHeroMatchesQuery, useGetMatchQuery, } = openDotaApiSlice;
