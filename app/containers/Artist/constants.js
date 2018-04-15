/*
 * Search Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const ARTIST_REQUEST = 'app/Artist/ARTIST_REQUEST';
export const ARTIST_SUCCESS = 'app/Artist/ARTIST_SUCCESS';
export const ARTIST_ERROR = 'app/Artist/ARTIST_ERROR';

export const GET_ALBUMS_REQUEST = 'app/Artist/GET_ALBUMS_REQUEST';
export const GET_ALBUMS_SUCCESS = 'app/Artist/GET_ALBUMS_SUCCESS';
export const GET_ALBUMS_ERROR = 'app/Artist/GET_ALBUMS_ERROR';