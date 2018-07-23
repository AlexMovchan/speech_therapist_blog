const COMPARE_LOGIN = 'COMPARE_LOGIN';

const initialState = {
  isAdmin: false,
  login: 'Helen',
  pass: 'frfgekmrf'
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case COMPARE_LOGIN:
      console.log('action - ', action);
      return {
        ...state,
        isAdmin: action.isAdmin,
      };

    default:
      return state;
  }
}

// Action Creators
export function CheckIsAdmin({ login, pass }) {
  return (initialState.login === login && initialState.pass === pass)
    ? { type: COMPARE_LOGIN, isAdmin: true }
    : { type: COMPARE_LOGIN, isAdmin: false };
}
