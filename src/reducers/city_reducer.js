import _ from 'lodash';

import {
  FETCH_CITIES
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CITIES:
      return { ..._.mapKeys(action.payload.facets.city, 'item') }
    default:
      return state;
  }
}
