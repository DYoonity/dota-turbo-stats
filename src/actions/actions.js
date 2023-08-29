import axios from 'axios';
import * as types from './actionTypes';

export const loadMatches = async () => {
  try {
    const response = await axios.get(
      'https://api.opendota.com/api/heroes/15/matches',
    );
    console.log(response);
  } catch (err) {
    console.error;
  }
};
