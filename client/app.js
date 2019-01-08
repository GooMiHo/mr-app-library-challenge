import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './redux/store';
import Main from './components/main';
import BookDetails from './components/bookDetails';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/book/:bookKey" component={BookDetails} />
        </div>
      </BrowserRouter>
    </Provider>
  </div>,
  document.getElementById('app')
);
