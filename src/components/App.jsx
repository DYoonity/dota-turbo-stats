import React from 'react';
import { styled, createTheme } from '@mui/material';
import MatchTableContainer from '../containers/MatchTableContainer';
import HeroGridContainer from './HeroGridContainer';

const imageURL =
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b452fd45-d16c-46a5-a04f-1f26f8c89835/d7kqqdf-0c69029d-a509-448f-aba5-e1060e4e496b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I0NTJmZDQ1LWQxNmMtNDZhNS1hMDRmLTFmMjZmOGM4OTgzNVwvZDdrcXFkZi0wYzY5MDI5ZC1hNTA5LTQ0OGYtYWJhNS1lMTA2MGU0ZTQ5NmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.OzEw7tZhuMh-0UnLyds9mmBjIGbQBHAQyK_xAkU7CXo';
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
      <Background />
      <HeroGridContainer />
      {/* <MatchTableContainer /> */}
    </div>
  );
}
