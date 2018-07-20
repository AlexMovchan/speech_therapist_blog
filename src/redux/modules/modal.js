const OPEN = 'OPEN';
const CLOSE = 'CLOSE';

const initialState = {
  modalIsOpen: false,
  modalName: ''
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        modalIsOpen: true,
        modalName: action.nameOfModal
      };

    case CLOSE:
      return {
        ...state,
        modalIsOpen: false
      };

    default: return state;
  }
}

// Action Creators
export function toggleModal(action, nameOfModal) {
  return {
    type: action,
    nameOfModal
  };
}
