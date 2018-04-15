/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { ARTIST_REQUEST, GET_ALBUMS_REQUEST } from 'containers/Artist/constants';
import { searchSuccess, searchError, getAlbumsRequest, getAlbumSuccess } from 'containers/Artist/actions';
import { makeSelectSearchText, makeSelectartists } from 'containers/Artist/selectors';

/**
 * artists request/response handler
 */

function* doSearch(action) {
  // Select username from store
  var idArtist = action.query;
  if(idArtist){ 
    var requestURL = `artist.php?i=${idArtist}`;
    try {
      // Call our request helper (see 'utils/request')
      
      //*Move this to actions
      var res = yield call(request, requestURL),
            artists = res.artists;
            yield put(searchSuccess(artists));
            idArtist = artists[0].idArtist;
            requestURL = `album.php?i=${idArtist}`;
            res = yield call(request, requestURL);
            yield put(getAlbumSuccess(res.album));
    } catch (err) {
      yield put(searchError(err));
    }
  }else{
    yield put(searchSuccess([]));
  }
}


/**
 * Root saga manages watcher lifecycle
 */
 function* Search() {
  // Watches for ARTIST_REQUEST actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount.
  yield takeLatest(ARTIST_REQUEST, doSearch);
}

function* AlbumSearch() {
  // Watches for ARTIST_REQUEST actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount.
  yield takeLatest(GET_ALBUMS_REQUEST, getAlbums);
}


export default Search;