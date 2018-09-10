import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {asyncComponent} from './utils/asyncComponent';

import Header from './components/Header';

const DetailPackage = asyncComponent(() => import('./modules/detail'));
const HomePage = asyncComponent(() => import('./modules/home'));

const RouterApp = (props) => {
  return (
    <Router>
      <div className="page-full-height">
        <Header handler={props.handler}/>
        <div className="container">
          <Switch>
            <Route exact path="/(search/:keyword)?" render={() => <HomePage filter={props.filter} handler={props.handler}/>}/>
            <Route exact path="/detail/@:scope/:package" component={DetailPackage} />
            <Route exact path="/detail/:package" component={DetailPackage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

RouterApp.propTypes = {
  filter: PropTypes.string,
  handler: PropTypes.func
};

export default RouterApp;
