import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';

function HeroGrid({ heroData }) {
  return (
    <div className='heroGrid'>
      <Box sx={{ height: 1000, width: '100%' }}>
        <h2>Choose Your Hero</h2>
        <ImageList cols='6' sx={{ width: 900, height: '100%' }}>
          {heroData.map(hero => (
            <ImageListItem sx={{ width: 128, height: '100%' }} key={hero.img}>
              <Button
                heroId={hero.heroId}
                onClick={() => {
                  console.log(`clicked ${hero.heroId}`);
                  //   dispatch(getMatches(15))
                }}>
                <img
                  width={128}
                  src={`${hero.img}?w=128&fit=crop&auto=format`}
                  srcSet={`${hero.img}?w=128&fit=crop&auto=format&dpr=2 2x`}
                  alt={hero.title}
                  loading='lazy'
                />
              </Button>
              <ImageListItemBar title={hero.title} position='below' />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

export default HeroGrid;
