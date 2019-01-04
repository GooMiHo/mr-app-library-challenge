import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import store from './redux/store';
import Main from './main';
import BookList from './book_list';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <HashRouter>
        <div>
          {/* <Route path="/" component={Main} /> */}
          <Route path="/" component={BookList} />
        </div>
      </HashRouter>
    </Provider>
  </div>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
