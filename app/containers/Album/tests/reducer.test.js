import { fromJS } from 'immutable';

import appReducer from '../reducer';

import {
  getAlbumRequest,
  getAlbumSuccess,
  getAlbumError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      formData: false,
      user: fromJS({
      }),
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the search action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('albums', false);

    expect(appReducer(state, getAlbumRequest())).toEqual(expectedResult);
  });

  it('should handle the search action correctly', () => {
    const fixture = [{name : "1", popularity : '10000'},{name : "2", popularity : '40000'}];
    const name = 'test name';
    const expectedResult = state
      .set('albums', fixture)
      .set('loading', false)
      .set('user', false);

    expect(appReducer(state, getAlbumSuccess(fixture, name))).toEqual(expectedResult);
  });

  it('should handle the erro action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(appReducer(state, l(fixture))).toEqual(expectedResult);
  });
});
