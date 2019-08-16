// Get all projects
export const getProjects = (projectLat, projectLong) => ({
  type: 'GET_PROJECTS',
  api: {
    path: `/projects?lat=${projectLat}&long=${projectLong}`,
    method: 'GET',
  },
});

// Get one project
export const getOneProject = (projectId) => ({
  type: 'GET_ONE_PROJECT',
  api: {
    path: `/projects/${projectId}`,
    method: 'GET',
  },
});
