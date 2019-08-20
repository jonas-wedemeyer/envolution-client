const initialState = {
  loggedInUser: {},
  fetch: false,
  error: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ONE_USR_REQUEST':
      return {
        ...state,
        fetch: true,
      };
    case 'GET_ONE_USR_SUCCESS': {
      return {
        ...state,
        loggedInUser: action.data.data,
        fetch: false,
      };
    }
    case 'GET_ONE_USR_FAILURE':
      return {
        ...state,
        error: action.error,
        fetch: false,
      };
    default:
      return state;
  }
};

export default user;
