const LOAD = 'LOAD';

const initialState = {
  loading: false,
  loaded: false,
  data: []
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: [...action.data]
      };
    default: return state;
  }
}

// Action Creators
export function SaveDataToStore(data) {
  return {
    type: LOAD,
    data
  };
}
