const apiMiddleware = (store) => (next) => (action) => {
  if (!action.api) return next(action);
  const { api } = action;
  const url = process.env.REACT_APP_SERVER_BASE_URL;
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
  fetch(url + api.path, {
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
