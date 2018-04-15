import { fromJS } from 'immutable';


import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from './constants';

let user = false;
if (localStorage.getItem('user')) {
  user = JSON.parse(localStorage.getItem('user'));
}
const initialState = user ? fromJS({ loggedIn: true, user, loading : false}) : fromJS({ formData: { username: '', password: '' }, loading : false });

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REQUEST:
    let error = false;
      return state
        .set('loading', true)
        .set('query', action.query)
        .set('error', error);
    case SEARCH_SUCCESS:
      return state
        .set('error', false)
        .set('loading', false)
        .set('artists', action.artists);
    
    case SEARCH_ERROR:
      return state
        .set('error', true)
        .set('loading', false)
        .set('artists', false);
    default:
      return state
  }
}