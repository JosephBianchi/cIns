import marketCheck from '../apis/market_check';
import history from '../history';

import {
  FETCH_CARS
} from './types';

const KEY = 'muePeyI8KYKnGGCwtJyas2fJKQqjDG6E';

export const fetchCars = (formValues) => {
  return async (dispatch) => {
    const response = await marketCheck.get(`/search?api_key=${KEY}&year=${formValues.year}&make=${formValues.make}&model=${formValues.model}&latitude=34.05&longitude=-118.24&radius=100&rows=100`);

    dispatch({ type: FETCH_CARS, payload: response.data });
  }
}
