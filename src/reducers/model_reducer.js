  import _ from 'lodash';

  import {
    FETCH_MODELS
  } from '../actions/types';

  export default (state = {}, action) => {
    switch (action.type) {
      case FETCH_MODELS:
        return { ..._.mapKeys(action.payload.facets.model, 'item') }
      default:
        return state;
    }
  }
