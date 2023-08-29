import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMatches } from '../features/matches/matchesSlice';

function MatchTable() {
  const { matchesList, loading } = useSelector(state => state.matches);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getMatches());
  // }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='matchTable'>
      <h2>DOTA Turbo Matches</h2>
      <button onClick={() => dispatch(getMatches(15))}> Get matches</button>
    </div>
  );
}

export default MatchTable;
