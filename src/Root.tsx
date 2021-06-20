import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Intro from './pages/intro/Intro';
import './styles/index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Intro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
