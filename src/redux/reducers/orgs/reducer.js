const initialState = {
  selectedOrg: {},
  fetch: false, // later focus : have 1 special reducers to handle fetch and errors
  error: null,
};

const organizations = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ONE_ORG_REQUEST':
      return {
        ...state,
        fetch: true,
      };
    case 'GET_ONE_ORG_SUCCESS': {
      return {
        ...state,
        selectedOrg: action.data.data,
        fetch: false,
      };
    }
    case 'GET_ONE_ORG_FAILURE':
      return {
        ...state,
        error: action.error,
        fetch: false,
      };
    default:
      return state;
  }
};

export default organizations;
