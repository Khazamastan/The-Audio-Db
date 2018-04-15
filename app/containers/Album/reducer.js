import { fromJS } from 'immutable';


import {
  GET_ALBUM,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_ERROR
} from './constants';

let user = false;
if (localStorage.getItem('user')) {
  user = JSON.parse(localStorage.getItem('user'));
}
const initialState = user ? fromJS({ loggedIn: true, user, loading : false}) : fromJS({ formData: { username: '', password: '' }, loading : false });

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case GET_ALBUM:
    let error = false;
      return state
        .set('loading', true)
        .set('query', action.query)
        .set('error', error);
    case GET_ALBUM_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('albums', action.albums);
    
    case GET_ALBUM_ERROR:
      return state
        .set('error', true)
        .set('loading', false)
        .set('albums', false);
    default:
      return state
  }
}