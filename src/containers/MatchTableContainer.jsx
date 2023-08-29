import React from 'react';
// import { useSelector } from 'react-redux';
import MatchTable from '../components/MatchTable.jsx';

const MatchTableContainer = () => {
  return (
    <div className='matchTableContainer'>
      <div className='outerBox'>
        <MatchTable />
      </div>
    </div>
  );
};

export default MatchTableContainer;
