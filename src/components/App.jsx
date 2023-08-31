import React from 'react';
import { styled } from '@mui/material';
import MatchTableContainer from '../containers/MatchTableContainer';
import HeroGridContainer from './HeroGridContainer';

const imageURL =
  'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg';
const Background = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: `url(${imageURL})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});

export default function App() {
  return (
    <div>
      {/* <Background /> */}
      <HeroGridContainer />
      {/* <MatchTableContainer /> */}
    </div>
  );
}
