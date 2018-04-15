/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_ALBUM } from 'containers/Album/constants';
import { getAlbumSuccess, getAlbumError } from 'containers/Album/actions';
import { makeSelectSearchText } from 'containers/Album/selectors';

/**
 * albums request/response handler
 */

export function* doSearch(action) {
  // Select username from store
  const albumid = action.query;
  if(albumid){
    const requestURL = `/track.php?m=${albumid}`;
    try {
      // Call our request helper (see 'utils/request')
      
      //*Move this to actions
      const res = yield call(request, requestURL),
            albums = res.track;
      yield put(getAlbumSuccess(albums));
    } catch (err) {
      yield put(getAlbumError(err));
    }
  }else{
    yield put(getAlbumSuccess([]));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* Search() {
  // Watches for GET_ALBUM actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount.
  yield takeLatest(GET_ALBUM, doSearch);
}