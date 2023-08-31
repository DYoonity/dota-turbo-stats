import axios from 'axios';

export const getHeroMatches = async (heroId) => {
    try {
        const response = await axios.get(
            `https://api.opendota.com/api/heroes/${heroId}/matches`,
        );
        return response.data;
    } catch (err) {
        return `Error: getMatches - ${err}`;
    }
};

export const getMatch = async (matchId) => {
    try {
        const response = await axios.get(
            `https://api.opendota.com/api/matches/${matchId}`,
        );
        return response.data;
    } catch (err) {
        return `Error: getMatch - ${err}`;
    }
};

export const getMatchItems = async (heroId) => {
    const heroMatchesData = await getHeroMatches(heroId);

    const heroMatchesIds = heroMatchesData.map(match => match.match_id);

    const heroMatchesItems = [];

    const singleMatchData = await getMatch(heroMatchesIds[0]);

    const singleMatchPlayers = singleMatchData.players;

    for (let j = 0; j < singleMatchPlayers.length; j += 1) {
        const player = singleMatchPlayers[j];
        // console.log(player.hero_id)
        if (player.hero_id === heroId) {
            console.log(player.purchase_time)

            heroMatchesItems.push(player.purchase_time);
        }
    }

    // console.log(heroMatchesItems);

    return heroMatchesItems;

    // for (let i = 0; i < heroMatchesIds.length; i += 1) {
    //     const singleMatchData = await getMatch(heroMatchesIds[i]);


    //     const singleMatchPlayers = singleMatchData.players;

    //     for (let j = 0; j < singleMatchPlayers.length; j += 1) {
    //         const player = singleMatchPlayers[j];
    //         console.log(player);
    //         if (player.hero_id === heroId) {
    //             heroMatchesItems.push(player.purchase_time);
    //         }
    //     }
    // }

    // // console.log(heroMatchesItems);
    // return heroMatchesItems;
}