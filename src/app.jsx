import React from 'react';
import { render } from 'react-dom';
import Title from './components/Title';

import './../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const App = () => (
  <div>
    <Title text='Aloha World!' />
  </div>
);

render(<App />, document.getElementById('root'));
