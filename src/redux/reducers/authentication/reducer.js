const initialState = {
  currentUser: null,
  token: null,
  fetch: false,
  error: null,
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP_REQUEST':
      return {
        ...state,
        fetch: true,
      };
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        currentUser: atob(action.data.token.split('.')[1]),
        token: action.data.token,
        fetch: false,
      };
    case 'SIGN_UP_FAILURE':
      return {
        ...state,
        error: action.error,
        fetch: false,
      };
    case 'SIGN_IN_REQUEST':
      return {
        ...state,
        fetch: true,
      };
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        currentUser: JSON.parse(atob(action.data.token.split('.')[1])),
        token: action.data.token,
        fetch: false,
      };
    case 'SIGN_IN_FAILURE':
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
