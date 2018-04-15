/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('search');

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

const makeSelectartists = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('artists')
);

export {
  selectGlobal,
  makeSelectSearchText,
  makeSelectLoading,
  makeSelectError,
  makeSelectartists,
};
