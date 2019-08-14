const apiMiddleware = (store) => (next) => (action) => {
  if (!action.api) return next(action);
  const { api } = action;
  const BASE_URL = 'https://private-a8c0e93-envolution.apiary-mock.com';
  const method = api.method || 'GET';

  const headers = {
    ...api.headers,
  };

  if (method === 'POST' || method === 'PUT') {
    headers['Content-Type'] = 'application/json';
  }

  let body;
  if (api.body) {
    body = JSON.stringify(api.body);
  }

  next({
    type: `${action.type}_REQUEST`,
  });
  fetch(BASE_URL + api.path, {
    method,
    headers,
    body,
  })
    .then((res) => res.json())
    .then((data) => {
      store.dispatch({
        type: `${action.type}_SUCCESS`,
        data,
      });
    })
    .catch((error) => {
      store.dispatch({
        type: `${action.type}_FAILURE`,
        error,
      });
    });
};

export default apiMiddleware;
