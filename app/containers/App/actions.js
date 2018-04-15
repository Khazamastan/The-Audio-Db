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
    OPEN_MODAL,
    CLOSE_MODAL,
  } from './constants';
  
  
  
  /**
   * Load the artists, this action starts the request saga
   *
   * @return {object} An action object with a type of SEARCH_REQUEST
   */
  
   export function openModal(id) {
    return {
      type: OPEN_MODAL,
      currentAlbum : id
    };
  }
  
  /**
   * Dispatched when the artists are loaded by the request saga
   *
   * @param  {array}  artists data.
   * 
   * @return {object} An action object with a type of SEARCH_SUCCESS passing the artists
   */
  export function closeModal() {
    return {
      type: CLOSE_MODAL,
    };
  }
  

  