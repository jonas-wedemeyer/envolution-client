import { combineReducers } from 'redux';

const initialState = {
  projectList: [],
  fetch: false, // have 1 special reducers to handle fetch and errors
  error: null,
};

// add case FILTERED_PROJECT with visibility filters
const projectList = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROJECTS_REQUEST':
      console.log('Requesting all projects, wait...'); // eslint-disable-line no-console
      return {
        ...state, // grab previous state
        fetch: true,
      };
    case 'GET_PROJECTS_SUCCESS': {
      console.log('Here is the list: ', action.data); // eslint-disable-line no-console
      return {
        ...state,
        projectList: action.data,
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

const projects = combineReducers({
  projectList,
});

export default projects;
