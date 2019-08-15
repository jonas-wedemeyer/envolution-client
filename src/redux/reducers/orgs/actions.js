// Get one org by ID
const getOneOrg = (orgId) => ({
  type: 'GET_ONE_ORG',
  api: {
    path: `/orgs/${orgId}`,
    method: 'GET',
  },
});

export default getOneOrg;
