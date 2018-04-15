/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('artist');

const makeSelectSearchText = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('query')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);
const makeSelectalbumsLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('albumsLoading')
);



const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectartists = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('artists')
);

const makeSelectAlbums = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('albums')
);



export {
  selectGlobal,
  makeSelectSearchText,
  makeSelectLoading,
  makeSelectError,
  makeSelectartists,
  makeSelectAlbums,
  makeSelectalbumsLoading,
};
