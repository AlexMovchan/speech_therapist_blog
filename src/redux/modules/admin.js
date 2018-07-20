const LOAD = 'LOAD';

const initialState = {
  isAdmin: false,
  login: 'Mom',
  pass: 'frfgekmrf'
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
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
  console.log(login, pass);
  return (initialState.login === login && initialState.login === pass)
    ? ({ type: LOAD, isAdmin: true })
    : ({ type: LOAD, isAdmin: false });
}
