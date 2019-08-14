const initialState = {
  projects: [],
  fetch: false, // later focus : have 1 special reducers to handle fetch and errors
  error: null,
};

// add case FILTERED_PROJECT with visibility filters
const projectList = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROJECTS_REQUEST':
      return {
        ...state, // grab previous state
        fetch: true,
      };
    case 'GET_PROJECTS_SUCCESS': {
      console.log('Here is the list: ', action.data); // eslint-disable-line no-console
      return {
        ...state,
        projects: action.data,
        fetch: false,
      };
    } // sort by distance, later
    case 'GET_PROJECTS_FAILURE':
      console.log('No projects, error is: ', action.error); // eslint-disable-line no-console
      return {
        ...state,
        error: action.error,
        fetch: false,
      };
    default:
      return state;
  }
};

export default projectList;