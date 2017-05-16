import React from 'react';
import { render } from 'react-dom';
import Title from './components/Title';

import './scss/app.scss';

const App = () => (
  <div>
    <Title text='Aloha World!' />
  </div>
);

render(<App />, document.getElementById('root'));
