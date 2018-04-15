import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  loadRepos,
  reposLoaded,
  repoLoadingError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
    });
  });