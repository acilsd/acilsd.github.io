import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

//destruction: create new object with all the data from existing state (...state) and add there all incoming data from our action payload

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_POST:
    return { ...state, post: action.payload.data };
  case FETCH_POSTS:
    return { ...state, all: action.payload.data };
  default:
    return state;
  }
}
