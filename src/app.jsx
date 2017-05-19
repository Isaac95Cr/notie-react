import React from 'react';
import { render } from 'react-dom';
import AppContainer from './components/AppContainer/AppContainer';
import './../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const App = () => (
  <AppContainer />
);

render(<App />, document.getElementById('root'));
