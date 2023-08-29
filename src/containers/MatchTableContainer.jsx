import React from 'react';
import MatchTable from '../components/MatchTable';

function MatchTableContainer() {
  return (
    <div className='matchTableContainer'>
      <div className='outerBox'>
        <MatchTable />
      </div>
    </div>
  );
}

export default MatchTableContainer;
