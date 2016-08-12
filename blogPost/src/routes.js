import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import PostsIndex from './components/PostsIndex';
import NewPost from './components/CreatePost';
import ShowPost from './components/ShowPost';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={PostsIndex}/>
    <Route path='add' component={NewPost} />
    <Route path=':id' component={ShowPost} />
  </Route>
);
