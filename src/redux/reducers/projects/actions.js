// Get all/unfiltered projects from the API
const getProjects = (projectLat, projectLong) => ({
  type: 'GET_PROJECTS',
  api: {
    path: `/projects?lat=${projectLat}&long=${projectLong}`,
  },
});

const projects = {
  getProjects,
};

export default projects;
