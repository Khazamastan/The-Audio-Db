import {
  LOAD_APP,
} from '../constants';

import {
  loadApp,
} from '../actions';

describe('App Actions', () => {
  describe('loadApp', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_APP,
      };

      expect(loadApp()).toEqual(expectedResult);
    });
  });

});
