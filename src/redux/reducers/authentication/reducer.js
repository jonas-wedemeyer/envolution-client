const initialState = {
  loggedUser: {
    interests: [],
  },
  token: null,
  fetch: false,
  error: null,
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP_REQUEST':
    case 'SIGN_IN_REQUEST':
    case 'GET_ONE_USR_REQUEST':
    case 'UPDATE_USR_REQUEST':
      return {
        ...state,
        fetch: true,
      };
    case 'SIGN_UP_SUCCESS':
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          ...JSON.parse(atob(action.data.token.split('.')[1])),
        },
        token: action.data.token,
        fetch: false,
      };
    case 'UPDATE_USR_SUCCESS':
    case 'GET_ONE_USR_SUCCESS': {
      return {
        ...state,
        loggedUser: {
          ...state.loggedUser,
          ...action.data.data,
        },
        fetch: false,
      };
    }
    case 'SIGN_UP_FAILURE':
    case 'SIGN_IN_FAILURE':
    case 'GET_ONE_USR_FAILURE':
      return {
        ...state,
        error: action.error,
        fetch: false,
      };
    case 'SIGN_OUT':
      return initialState;
    default:
      return state;
  }
};

export default authentication;
