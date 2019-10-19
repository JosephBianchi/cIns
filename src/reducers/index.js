import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import carReducer from './car_reducer';
import modelReducer from './model_reducer';
import cityReducer from './city_reducer';
import yearReducer from './year_reducer';

export default combineReducers({
  form: formReducer,
  cars: carReducer,
  models: modelReducer,
  years: yearReducer,
  cities: cityReducer
});
