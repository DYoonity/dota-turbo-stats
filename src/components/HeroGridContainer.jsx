import React from 'react';
import Box from '@mui/material/Box';
import HeroGrid from './HeroGrid';
import heroData from '../data/heroes';

function HeroGridContainer() {
  const heroPicData = heroesArr =>
    heroesArr.map(heroObj => ({
      heroId: heroObj.id,
      img: `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroObj.name}.png`,
      title: heroObj.localized_name,
      name: heroObj.localized_name,
    }));

  const heroesData = heroPicData(heroData);

  return (
    <div className='heroGrid'>
      <Box sx={{ height: '100%', width: '100%' }}>
        <HeroGrid heroData={heroesData} />
      </Box>
    </div>
  );
}

export default HeroGridContainer;
