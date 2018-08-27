import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {asyncComponent} from './utils/asyncComponent';

import Header from './components/Header';

const DetailPackage = asyncComponent(() => import('./modules/detail'));
const HomePage = asyncComponent(() => import('./modules/home'));

const RouterApp = () => {
  let containerStyle = {marginTop: '70px'};
  return (
    <Router>
      <div className="page-full-height">
        <Header/>
        <div className="container" style={containerStyle}>
          <Switch>
            <Route exact path="/(search/:keyword)?" component={ HomePage } />
            <Route exact path="/detail/@:scope/:package" component={DetailPackage} />
            <Route exact path="/detail/:package" component={DetailPackage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default RouterApp;
