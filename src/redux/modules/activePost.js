const SET_ACTIVE_POST = 'SET_ACTIVE_POST';

const initialState = {
  post: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ACTIVE_POST:
      console.log('action - ', action);
      return {
        ...state,
        post: action.post,
      };

    default:
      return state;
  }
}

export function setActivePost(post) {
  console.log(post);
  return {
    type: SET_ACTIVE_POST,
    post
  };
}
