import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {
  useGetHeroMatchesQuery,
  useGetMatchQuery,
} from '../features/matches/openDotaApiSlice';

function MatchTable() {
  const {
    data: heroMatchesData,
    error,
    isSuccess,
    isError,
    isLoading,
  } = useGetHeroMatchesQuery(15);

  let heroMatchesContent;

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isSuccess) {
    heroMatchesContent;
  } else if (isError) {
    heroMatchesContent = <p>{error}</p>;
  }

  const columns = [
    { field: 'matchId', headerName: 'Match ID', width: 150 },
    { field: 'hero', headerName: 'Hero', width: 150 },
    { field: 'kills', headerName: 'Kills', width: 150 },
    { field: 'deaths', headerName: 'Deaths', width: 150 },
    { field: 'itemTimings', headerName: 'Item Timings', width: 150 },
  ];

  const dataRows = heroMatchesData.map((row, index) => ({
    id: index + 1,
    matchId: row.match_id,
  }));

  return (
    <div className='matchTable'>
      <Box sx={{ height: 520, width: '100%' }}>
        <h2>DOTA Matches - Hero - Item Timings</h2>
        {/* <button onClick={() => dispatch(getMatches(15))}> Get matches</button> */}
        <DataGrid rows={dataRows} columns={columns} />
      </Box>
    </div>
  );
}

export default MatchTable;
