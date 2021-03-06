// Get all projects
export const getProjects = (city) => ({
  type: 'GET_PROJECTS',
  api: {
    path: `/projects/city/${city}`,
    method: 'GET',
  },
});

// Get one project
export const getOneProject = (id) => ({
  type: 'GET_ONE_PROJECT',
  api: {
    path: `/projects/${id}`,
    method: 'GET',
  },
});

// Get participants for one project
export const getParticipants = (id) => ({
  type: 'GET_PAX_PER_PROJECT',
  api: {
    path: `/projects/${id}/participants`,
    method: 'GET',
  },
});

// Get filtered projects (on category)
export const setFilters = (availability, category) => ({
  type: 'SET_FILTERS',
  availability,
  category,
});

// Post one project
export const postProject = () => ({
  type: 'POST_PROJECT',
  api: {
    path: `/projects`,
    method: 'POST',
  },
});
