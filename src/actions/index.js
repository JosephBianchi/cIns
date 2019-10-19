import marketCheck from '../apis/market_check';
import history from '../history';

import {
  FETCH_CARS,
  FETCH_MODELS,
  FETCH_CITIES,
  FETCH_YEARS
} from './types';

const KEY = 'AOv3PQT7NzbnMR08INKyMXaBAtMXb1vQ';

export const fetchCars = (formValues) => {
  return async (dispatch) => {
    const response = await marketCheck.get(`/search?api_key=${KEY}&year=${formValues.year.value}&make=${formValues.make.value}&model=${formValues.model.value}&${formValues.year.value}&country=CA`);

    dispatch({ type: FETCH_CARS, payload: response.data });
  }
}

export const fetchModels = (makeValue) => {
  return async (dispatch) => {
    const response = await marketCheck.get(`/search?api_key=${KEY}&make=${makeValue}&country=CA&facets=model`);

    dispatch({ type: FETCH_MODELS, payload: response.data });
  }
}

export const fetchCities = (modelValue) => {
  return async (dispatch) => {
    const response = await marketCheck.get(`/search?api_key=${KEY}&model=${modelValue}&country=CA&facets=city`);

    dispatch({ type: FETCH_CITIES, payload: response.data });
  }
}

export const fetchYears = (modelValue, cityValue) => {
  return async (dispatch) => {
    const response = await marketCheck.get(`/search?api_key=${KEY}&model=${modelValue}&city=${cityValue}&country=CA&radius=7&facets=year`);

    dispatch({ type: FETCH_YEARS, payload: response.data });
  }
}
