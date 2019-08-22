const initialState = {
  selectedProject: {},
  allProjects: [],
  newProject: {},
  fetch: false, // later focus : have 1 special reducers to handle fetch and errors
  error: null,
  filters: {
    category: {},
    availability: null,
  },
};

const projects = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return {
        ...state,
        filters: {
          availability: action.availability,
          category: action.category,
        },
      };
    case 'GET_ONE_PROJECT_REQUEST':
    case 'GET_PROJECTS_REQUEST':
      return {
        ...state,
        fetch: true,
      };
    case 'GET_ONE_PROJECT_SUCCESS': {
      return {
        ...state,
        selectedProject: action.data.data,
        fetch: false,
      };
    }
    case 'GET_PROJECTS_SUCCESS': {
      console.log('Here is the list: ', action.data.data); // eslint-disable-line no-console
      return {
        ...state,
        allProjects: action.data.data,
        fetch: false,
      };
    }
    case 'POST_PROJECT': {
      return {
        ...state,
        newProject: {
          ...state.newProject,
        },
      };
    }
    case 'GET_ONE_PROJECT_FAILURE':
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

export default projects;
