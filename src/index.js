import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

import Header from './components/site_header';
import Footer from './components/site_footer';
import PageNotFound from './components/site_not_found'; //<Route Component={PageNotFound} />
import BlogPostsIndex from './components/blogposts_index';
import NewBlogPost from './components/blogposts_new';
import PostShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path='/posts/new' component={NewBlogPost} />
          <Route path='/posts/:id' component={PostShow} />
          <Route path='/' component={BlogPostsIndex} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
