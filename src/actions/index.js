import marketCheck from '../apis/market_check';
import history from '../history';

import {
  FETCH_CARS,
  FETCH_MODELS
} from './types';

const KEY = 'AOv3PQT7NzbnMR08INKyMXaBAtMXb1vQ';

export const fetchCars = (formValues) => {
  return async (dispatch) => {
    const response = await marketCheck.get(`/search?api_key=${KEY}&year=${formValues.year.value}&make=${formValues.make.value}&model=${formValues.model.value}&latitude=34.05&longitude=-118.24&radius=100&rows=100`);

    dispatch({ type: FETCH_CARS, payload: response.data });
  }
}

export const fetchModels = (makeValue) => {
  return async (dispatch) => {
    const response = await marketCheck.get(`/search?api_key=${KEY}&make=${makeValue}&latitude=34.05&longitude=-118.24&radius=7&facets=model`);

    dispatch({ type: FETCH_MODELS, payload: response.data });
  }
}
