import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header/Header';
import './../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const App = () => (
  <div>
    <Header />
  </div>
);

render(<App />, document.getElementById('root'));
