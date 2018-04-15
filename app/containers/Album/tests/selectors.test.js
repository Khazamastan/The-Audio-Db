import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectSearchText,
  makeSelectLoading,
  makeSelectError,
  makeSelectalbums,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectSearchText', () => {
  const currentUserSelector = makeSelectSearchText();
  it('should set the entered text', () => {
    const query = 'mxstbr';
    const mockedState = fromJS({
      global: {
        query: query,
      },
    });
    expect(makeSelectSearchText(mockedState)).toEqual(query);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      global: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      global: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectalbums', () => {
  const albumselector = makeSelectalbums();
  it('should select the albums', () => {
    const albums = fromJS([]);
    const mockedState = fromJS({
      global: {
        plantes: albums
      },
    });
    expect(albumselector(mockedState)).toEqual(albums);
  });
});
