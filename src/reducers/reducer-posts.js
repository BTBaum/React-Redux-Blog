import { FETCH_POSTS } from '../actions/index';
// all = array of blog posts on index route
// post = selected single blog post
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
