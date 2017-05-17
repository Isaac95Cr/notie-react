import React from 'react';
import { render } from 'react-dom';

import Header from './components/header/header';
import MainSection from './components/MainSection/MainSection';

import './../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/app.scss';

const App = () => (
  <div className='app container-fluid'>
    <Header />
    <MainSection />
  </div>
);

render(<App />, document.getElementById('root'));
