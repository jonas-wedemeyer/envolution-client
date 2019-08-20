const getOneUser = () => ({
  type: 'GET_ONE_USR',
  api: {
    path: '/myprofile',
    method: 'GET',
  },
});

export default getOneUser;
