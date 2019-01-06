import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import store from './redux/store';
import BookList from './components/bookList/bookList';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route path="/" component={BookList} />
        </div>
      </HashRouter>
    </Provider>
  </div>,
  document.getElementById('app')
);
