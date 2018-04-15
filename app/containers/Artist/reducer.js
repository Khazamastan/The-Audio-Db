import { fromJS } from 'immutable';


import {
  ARTIST_REQUEST,
  ARTIST_SUCCESS,
  ARTIST_ERROR,
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_ERROR,
} from './constants';

let user = false;
if (localStorage.getItem('user')) {
  user = JSON.parse(localStorage.getItem('user'));
}
const initialState = fromJS({ loading : false, albumsLoading:false });

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case ARTIST_REQUEST:
    let error = false;
      return state
        .set('loading', true)
        .set('query', action.query)
        .set('error', error);
    case ARTIST_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('artists', action.artists);
    case ARTIST_ERROR:
      return state
        .set('error', true)
        .set('loading', false)
        .set('albums', false);
    case GET_ALBUMS_REQUEST:
        error = false;
        return state
          .set('albumsLoading', true)
          .set('query', action.query)
          .set('error', error);
      case GET_ALBUMS_SUCCESS:
        return state
          .set('error', false)
          .set('albumsLoading', false)
          .set('albums', action.albums);
      
      case GET_ALBUMS_ERROR:
        return state
          .set('error', true)
          .set('albumsLoading', false)
          .set('albums', false);
    default:
      return state
  }
}