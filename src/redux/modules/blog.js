const LOAD = 'LOAD';
const SET_PREVIEW_TEXT = 'SET_PREVIEW_TEXT';

const initialState = {
  loading: false,
  loaded: false,
  data: [],
  post: {}
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

    case SET_PREVIEW_TEXT:
      return {
        ...state,
        post: action.post
      };

    default: return state;
  }
}

// Action Creators
export function savePostsToStore(data) {
  return {
    type: LOAD,
    data
  };
}

export function setPostTextToPreview(post) {
  console.log(post);
  return {
    type: SET_PREVIEW_TEXT,
    post
  };
}
