import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const openDotaApi = createApi({
    reducerPath: 'openDotaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.opendota.com/api/' }),
    endpoints: build => ({
        // getHeroMatchesItemTiming: build.query({
        //     async queryFn(heroId, _queryApi, _extraOptions, fetchWithBQ) {
        //         const heroMatchesData = await fetchWithBQ(`heroes/${heroId}/matches`);
        //         if (heroMatchesData.error) return { error: heroMatchesData.error };
        //         const heroMatchesIds = heroMatchesData.map(match => match.match_id);

        //         const heroMatchesItems = [];

        //         for (const heroMatchId of heroMatchesIds) {
        //             const singleMatch = await fetchWithBQ(`/matches/${heroMatchId}`);
        //             heroMatchesItems.push(singleMatch);
        //         }

        //         return heroMatchesItems;
        //     },
        // }),
        getHeroMatches: build.query({
            query: (heroId) => `heroes/${heroId}/matches`,
        }),
        getMatch: build.query({
            query: (matchId) => `/matches/${matchId}`,
        }),
    }),
});

export const { useGetHeroMatchesQuery, useGetMatchQuery } = openDotaApi;
