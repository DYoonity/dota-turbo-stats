import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useGetHeroMatchesQuery } from '../features/matches/openDotaApiSlice';

function MatchTable({ selectedHeroId }) {
  const mySelectedHeroId = Number(selectedHeroId);
  const {
    data: heroMatchesData,
    error,
    isSuccess,
    isError,
    isLoading,
  } = useGetHeroMatchesQuery(mySelectedHeroId);

  let dataRows;

  if (isLoading) {
    return <p>Loading Matches...</p>;
  }
  if (isSuccess) {
    dataRows = heroMatchesData.map((match, index) => ({
      id: index + 1,
      matchId: match.match_id,
      league_name: match.league_name,
      kills: match.kills,
      deaths: match.deaths,
      assists: match.assists,
    }));
  } else if (isError) {
    dataRows = <p>{error}</p>;
  }

  const columns = [
    {
      field: 'matchId',
      headerName: 'Match ID',
      width: 150,
      // renderCell: params => <a href='${dataRows.row.id}'>${params.row.id}</a>,
    },
    { field: 'league_name', headerName: 'League', width: 300 },
    { field: 'kills', headerName: 'Kills', width: 150 },
    { field: 'deaths', headerName: 'Deaths', width: 150 },
    { field: 'assists', headerName: 'Assists', width: 150 },
    { field: 'itemTimings', headerName: 'Item Timings', width: 150 },
  ];

  return (
    <div className='matchTable'>
      <Box sx={{ height: 520, width: '100%' }}>
        <Typography variant='h5' component='h5'>
          DOTA Hero Matches
        </Typography>
        {/* <button onClick={() => dispatch(getMatches(15))}> Get matches</button> */}
        <DataGrid rows={dataRows} columns={columns} />
      </Box>
    </div>
  );
}

export default MatchTable;
