import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'
import {App, Page1, Page2, NotFound} from './App';
import './index.css';


// Implementa las rutas aca

ReactDOM.render(
  <App >
  <Router history={hashHistory}>
    <Route path="/" component={Page1} />
    <Route path="Page1" component={Page1} />
    <Route path="Page2" component={Page2} />
    <Route path="*" component={NotFound} />
  </Router>

  <App />, // Es posible que tengas que hacer un cambio en esta linea.
  document.getElementById('root')
);
