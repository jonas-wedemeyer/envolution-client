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

export const signIn = (userHash) => ({
  type: 'SIGN_IN',
  api: {
    path: '/sign-in',
    method: 'GET',
    headers: {
      Authorization: `Basic: ${userHash}`,
    },
  },
});

export const signOut = () => ({
  type: 'SIGN_OUT',
});
