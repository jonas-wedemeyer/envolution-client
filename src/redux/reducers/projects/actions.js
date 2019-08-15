// Get all projects
export const getProjects = (city) => ({
  type: 'GET_PROJECTS',
  api: {
    path: `/projects/${city}`,
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
