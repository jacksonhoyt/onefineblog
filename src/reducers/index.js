import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import BlogPostReducer from './reducer_blogposts';

const rootReducer = combineReducers({
  posts: BlogPostReducer,
  form: formReducer
});

export default rootReducer;
