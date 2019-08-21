export const signUp = (email, password) => ({
  type: 'SIGN_UP',
  api: {
    path: '/sign-up',
    method: 'POST',
    body: {
      email,
      password,
    },
  },
});

export const signIn = (email, password) => ({
  type: 'SIGN_IN',
  api: {
    path: '/sign-in',
    method: 'GET',
    headers: {
      Authorization: `Basic: ${btoa(`${email}:${password}`)}`,
    },
  },
});

export const signOut = () => ({
  type: 'SIGN_OUT',
});

export const getOneUser = () => ({
  type: 'GET_ONE_USR',
  api: {
    path: '/myprofile',
    method: 'GET',
  },
});
