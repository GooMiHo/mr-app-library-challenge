import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import store from './redux/store';
import Main from './components/main';
import BookDetails from './components/bookDetails';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/book/:bookKey" component={BookDetails} />
        </div>
      </HashRouter>
    </Provider>
  </div>,
  document.getElementById('app')
);
