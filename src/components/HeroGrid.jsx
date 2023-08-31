import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';
import MatchTable from './MatchTable';
import { selectHero } from '../features/matches/heroSlice';

function HeroGrid({ heroData }) {
  const [expanded, setExpanded] = useState(true);
  const [selectedHeroId, setSelectedHeroId] = useState(1);
  // const myHeroId = useSelector(state => state);

  // const dispatch = useDispatch();

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleHeroClick = event => {
    setSelectedHeroId(event);
  };
  // const handleHeroClick = event => {
  //   console.log(event);
  //   dispatch(selectHero(event));
  // };

  // console.log(myHeroId);

  return (
    <div className='heroGrid'>
      <Typography variant='h4' component='h4' align='center'>
        DOTA Hero Matches
      </Typography>{' '}
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'>
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Select Your Hero:
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            justifyContent='center'
            alignItems='center'
            display='flex'
            sx={{ height: 1000, width: '100%' }}>
            <ImageList cols='6' sx={{ width: 900, height: '100%' }}>
              {heroData.map(hero => (
                <ImageListItem
                  sx={{ width: 128, height: '100%' }}
                  key={hero.img}>
                  <Button
                    // heroId={hero.heroId}
                    onClick={() => {
                      console.log(`clicked ${hero.heroId}`);
                      handleHeroClick(hero.heroId);
                      // console.log(myHeroId);
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
        </AccordionDetails>
      </Accordion>
      <MatchTable selectedHeroId={selectedHeroId} />
    </div>
  );
}

export default HeroGrid;
