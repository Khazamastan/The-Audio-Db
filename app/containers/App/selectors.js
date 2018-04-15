/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');


const makeIsModelOpen = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('modalIsOpen')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);
const makeSelectCurrentAlbum = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentAlbumData')
);




export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeIsModelOpen,
  makeSelectCurrentAlbum,
};
