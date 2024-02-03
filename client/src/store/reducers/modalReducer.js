import {SET_MODAL, REMOVE_MODAL} from '../actions/actionTypes';

export const initialStateModal = {
  open: false,
  closeOnBackdrop: true,
  title: '',
  body: [],
  footer: []
};

export const modalReducer = (state, action) => {
  switch (action.type) {
    case SET_MODAL:
      let modalState = action.payload;
      let { open, title, body, footer } = modalState;

      return {
        open,
        title,
        body,
        footer
      };
    case REMOVE_MODAL:
      return initialStateModal;
    default:
      return {
        ...state
      };
  }
};
