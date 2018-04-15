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
  GET_ALBUM,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_ERROR,
} from './constants';



/**
 * Load the albums, this action starts the request saga
 *
 * @return {object} An action object with a type of GET_ALBUM
 */

 export function getAlbumRequest(query, loggedInUser) {
  return {
    type: GET_ALBUM,
    query,
    loggedInUser,
  };
}

/**
 * Dispatched when the albums are loaded by the request saga
 *
 * @param  {array}  albums data.
 * 
 * @return {object} An action object with a type of GET_ALBUM_SUCCESS passing the albums
 */
export function getAlbumSuccess(albums) {
  return {
    type: GET_ALBUM_SUCCESS,
    albums,
  };
}

/**
 * Dispatched when loading the albums fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of GET_ALBUM_ERROR passing the error
 */
export function getAlbumError(error) {
  return {
    type: GET_ALBUM_ERROR,
    error,
  };
}
