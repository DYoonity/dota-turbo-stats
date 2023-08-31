import { createApi, fetchBaseQuery, createEntityAdapter } from '@reduxjs/toolkit/query/react';

export const openDotaApiSlice = createApi({
    reducerPath: 'openDotaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.opendota.com/api/' }),
    endpoints: build => ({
        getHeroMatches: build.query({
            query: (heroId) => `heroes/${heroId}/matches`,
            // return matchesAdapter.setAll(initialState, responseData)
        }),
        getMatch: build.query({
            query: (matchId) => `/matches/${matchId}`,
        }),
        // getHeroMatchesItemTiming: build.query({
        //     async queryFn(heroId, _queryApi, _extraOptions, fetchWithBQ) {
        //         const heroMatchesData = await fetchWithBQ(`heroes/${heroId}/matches`);
        //         if (heroMatchesData.error) return { error: heroMatchesData.error };

        //         const heroMatchesIds = heroMatchesData.map(match => match.match_id);

        //         const heroMatchesItems = [];

        //         // for (const heroMatchId of heroMatchesIds) {
        //         //     const singleMatch = await fetchWithBQ(`/matches/${heroMatchId}`);
        //         //     heroMatchesItems.push(singleMatch);
        //         // }
        //         const singleMatch = await fetchWithBQ(`/matches/${heroMatchesIds[0]}`);

        //         const singleMatchPlayers = singleMatch.players;

        //         for (let i = 0; i < singleMatchPlayers.length; i += 1) {
        //             const player = singleMatchPlayers[i];
        //             if (player.hero_id === heroId) {
        //                 heroMatchesItems.push(player.purchase_time);
        //             }
        //         }
        //         heroMatchesItems.push();

        //         console.log(heroMatchesItems);
        //         return heroMatchesItems;
        //     },
        // }),
    }),
});

// Custom generated hooks
export const { useGetHeroMatchesQuery, useGetMatchQuery, } = openDotaApiSlice;
