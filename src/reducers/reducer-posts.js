import { FETCH_POSTS, FETCH_POST } from '../actions/index';
// all = array of blog posts on index route
// post = selected single blog post
const INITIAL_STATE = { all: [], post: null };

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
