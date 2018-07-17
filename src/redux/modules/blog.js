const LOAD = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

const initialState = {
  loading: false,
  loaded: false,
  data: []
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD :
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

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}
