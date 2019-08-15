// Get one org by ID
const getOneOrg = (organizationId) => ({
  type: 'GET_ONE_ORG',
  api: {
    path: `/orgs/${organizationId}`,
    method: 'GET',
  },
});

export default getOneOrg;
