import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AppWrapper, Theme } from './styled-components';

import createReduxStore from './redux/index';
import { storeState } from './redux/persistState';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createReduxStore();

store.subscribe(() => {
  storeState({
    authentication: store.getState().authentication,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <AppWrapper>
          <App />
        </AppWrapper>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below.
serviceWorker.register();
