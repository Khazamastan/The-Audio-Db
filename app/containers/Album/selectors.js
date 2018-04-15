/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('album');

const selectRoute = (state) => state.get('route');

const makeSelectSearchText = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('query')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectTracks = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('albums')
);

export {
  selectGlobal,
  makeSelectSearchText,
  makeSelectLoading,
  makeSelectError,
  makeSelectTracks,
};
