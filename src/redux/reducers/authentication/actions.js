export const signUp = (userInput) => ({
  type: 'SIGN_UP',
  api: {
    path: '/sign-up',
    method: 'POST',
    body: {
      ...userInput,
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

export const updateUser = (userFields) => ({
  type: 'UPDATE_USR',
  api: {
    path: '/myprofile',
    method: 'PUT',
    body: userFields,
  },
});
