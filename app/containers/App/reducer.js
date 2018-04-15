import { fromJS } from 'immutable';


import { 
  OPEN_MODAL,
  CLOSE_MODAL,
} from './constants';

const initialState =  fromJS({});

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return  state
            .set('modalIsOpen', true)
            .set('currentAlbum', action.currentAlbum.idAlbum)
            .set('currentAlbumData', action.currentAlbum);
      break;
    case CLOSE_MODAL:
      return  state
            .set('modalIsOpen', false)
            .set('currentAlbum', null);
      break;
    default:
      return state
  }
}