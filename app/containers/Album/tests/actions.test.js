import {
  GET_ALBUM,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_ERROR
} from './constants';

import {
  getAlbumRequest,
  getAlbumSuccess,
  getAlbumError,
} from '../actions';

describe('App Actions', () => {
  describe('getAlbumRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_ALBUM,
      };

      expect(getAlbumRequest()).toEqual(expectedResult);
    });
  });

  describe('getAlbumSuccess', () => {
    it('should return the correct type and the passed users', () => {
      const fixture = ['Test'];
      const albums = [{name : "1", popularity : '10000'},{name : "2", popularity : '40000'}];
      const expectedResult = {
        type: GET_ALBUM_SUCCESS,
        albums: albums,
      };

      expect(getAlbumSuccess(albums)).toEqual(expectedResult);
    });
  });

  describe('getAlbumError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: GET_ALBUM_ERROR,
        error: fixture,
      };

      expect(getAlbumError(fixture)).toEqual(expectedResult);
    });
  });
});
