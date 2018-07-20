const OPEN = 'OPEN';
const CLOSE = 'CLOSE';

const initialState = {
  modalIsOpen: false
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN:
      console.log('ITS OPEN');
      return {
        ...state,
        modalIsOpen: true
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
export function toggleModal(action) {
  console.log(action);
  return {
    type: action,
  };
}
