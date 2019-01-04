import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Main from './main';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Main />
    </Provider>
  </div>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
