import React from 'react';
import 'element-theme-default';
import {i18n} from 'element-react';
import locale from 'element-react/src/locale/lang/en';

i18n.use(locale);

import Route from './router';

import './styles/main.scss';
import 'normalize.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: ''};

    this.changeFilter = (newFilter) => {
      this.setState({ filter: newFilter.target.value.trim() });
    }
  }

  render() {
    return (
      <Route filter={this.state.filter} handler={this.changeFilter}/>
    );
  }
}
