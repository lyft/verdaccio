import React from 'react';
import {Link} from 'react-router-dom';

import API from '../../utils/api';
import {getRegistryURL} from '../../utils/url';

import classes from './header.scss';
import './logo.png';

export default class Header extends React.Component {
  state = {
    logo: '',
    scope: (window.VERDACCIO_SCOPE) ? `${window.VERDACCIO_SCOPE}:` : ''
  };

  constructor(props) {
    super(props);
    this.loadLogo = this.loadLogo.bind(this);
  }

  componentDidMount() {
    this.loadLogo();
  }

  async loadLogo() {
    try {
      const logo = await API.request('logo');
      this.setState({logo});
    } catch (error) {
      throw new Error(error);
    }
  }

  render() {
    const registryURL = getRegistryURL();
    const {logo, scope} = this.state;
    return (
      <header className={classes.header}>
        <div className={classes.headerWrap}>
          <Link to="/">
            <img src={logo} className={classes.logo} />
          </Link>
          <figure>
            npm set { scope }registry { registryURL }
          </figure>
        </div>
      </header>
    );
  }
}
