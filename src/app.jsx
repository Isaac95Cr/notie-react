import React from 'react';
import { render } from 'react-dom';

import Header from './components/header/header';
import './scss/app.scss';

const App = () => (
  <div>
    <Header />
  </div>
);

render(<App />, document.getElementById('root'));
