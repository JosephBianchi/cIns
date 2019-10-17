import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import carReducer from './car_reducer';

export default combineReducers({
  form: formReducer,
  cars: carReducer
});
