import {
  ARTIST_REQUEST,
  ARTIST_SUCCESS,
  ARTIST_ERROR
} from './constants';

import {
  searchRequest,
  searchSuccess,
  searchError,
} from '../actions';

describe('App Actions', () => {
  describe('searchRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: ARTIST_REQUEST,
      };

      expect(searchRequest()).toEqual(expectedResult);
    });
  });

  describe('searchSuccess', () => {
    it('should return the correct type and the passed users', () => {
      const fixture = ['Test'];
      const artists = [{name : "1", popularity : '10000'},{name : "2", popularity : '40000'}];
      const expectedResult = {
        type: ARTIST_SUCCESS,
        artists: artists,
      };

      expect(searchSuccess(artists)).toEqual(expectedResult);
    });
  });

  describe('searchError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: ARTIST_ERROR,
        error: fixture,
      };

      expect(searchError(fixture)).toEqual(expectedResult);
    });
  });
});
