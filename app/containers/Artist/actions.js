/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  ARTIST_REQUEST,
  ARTIST_SUCCESS,
  ARTIST_ERROR,
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_ERROR,
} from './constants';



/**
 * Load the artists, this action starts the request saga
 *
 * @return {object} An action object with a type of ARTIST_REQUEST
 */

 export function searchRequest(query, loggedInUser) {
  return {
    type: ARTIST_REQUEST,
    query,
    loggedInUser,
  };
}

/**
 * Dispatched when the artists are loaded by the request saga
 *
 * @param  {array}  artists data.
 * 
 * @return {object} An action object with a type of ARTIST_SUCCESS passing the artists
 */
export function searchSuccess(artists) {
  return {
    type: ARTIST_SUCCESS,
    artists,
  };
}

/**
 * Dispatched when loading the artists fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of ARTIST_ERROR passing the error
 */
export function searchError(error) {
  return {
    type: ARTIST_ERROR,
    error,
  };
}


export function getAlbumsRequest(query) {
  return {
    type: GET_ALBUMS_REQUEST,
    query,
  };
}

/**
 * Dispatched when the artists are loaded by the request saga
 *
 * @param  {array}  artists data.
 * 
 * @return {object} An action object with a type of ARTIST_SUCCESS passing the artists
 */

export function getAlbumSuccess(albums) {
  return {
    type: GET_ALBUMS_SUCCESS,
    albums,
  };
}

/**
 * Dispatched when loading the artists fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of ARTIST_ERROR passing the error
 */
export function getAlbumsError(error) {
  return {
    type: GET_ALBUMS_ERROR,
    error,
  };
}
