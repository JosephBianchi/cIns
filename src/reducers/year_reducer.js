import _ from 'lodash';

import {
  FETCH_YEARS
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_YEARS:
      return { ..._.mapKeys(action.payload.facets.year, 'item') }
    default:
      return state;
  }
}
