// Get all/unfiltered projects from the API
const getProjects = (projectLat, projectLong) => ({
  type: 'GET_PROJECTS',
  api: {
    path: `/projects?lat=${projectLat}&long=${projectLong}`,
  },
});

// Get one project
const getOneProject = (projectId) => ({
  type: 'GET_ONE_PROJECT',
  api: {
    path: `/projects/${projectId}`,
  },
});

const projects = {
  getProjects,
  getOneProject,
};

export default projects;
