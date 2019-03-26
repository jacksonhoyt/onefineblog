import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

// state = {} makes state an 'object' by default
export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      // const post = action.payload.data
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;

      return { ...state, [action.payload.data.id]: action.payload.data}
    case FETCH_POSTS:
      // use lodash mapKeys to turn one property from the payload into a key
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;

  }
}
