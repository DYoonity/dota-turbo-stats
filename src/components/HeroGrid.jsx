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
        <ImageList cols='6' sx={{ width: 1000, height: '100%' }}>
          {heroData.map(hero => (
            <ImageListItem sx={{ width: 200, height: '100%' }} key={hero.img}>
              <Button
                onClick={() => {
                  console.log('clicked');
                  //   dispatch(getMatches(15))
                }}>
                <img
                  src={`${hero.img}?w=100&fit=crop&auto=format`}
                  srcSet={`${hero.img}?w=100&fit=crop&auto=format&dpr=2 2x`}
                  alt={hero.title}
                  loading='lazy'
                />
              </Button>
              <ImageListItemBar title={hero.title} position='below' />
            </ImageListItem>
          ))}
        </ImageList>

        {/* <button onClick={() => dispatch(getMatches(15))}> Get matches</button> */}
      </Box>
    </div>
  );
}

export default HeroGrid;
