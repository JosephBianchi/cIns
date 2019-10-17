import _ from 'lodash';

import {
  FETCH_CARS
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CARS:
      return { ...state, ..._.mapKeys(action.payload.listings, 'id') }
    default:
      return state;
  }
}
