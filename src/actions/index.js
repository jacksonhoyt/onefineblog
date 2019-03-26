import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=discogolfpants'

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(post_id) {
  const request = axios.get(`${ROOT_URL}/posts/${post_id}${API_KEY}`)
  .catch(error => {
    // console.log(error.response);
    return {
      type: FETCH_POST,
      payload: error.response
    };
  })

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function deletePost(post_id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${post_id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: post_id
  };
}