import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import Package from '../Package';
import Help from '../Help';
import NoItems from '../NoItems';
import {formatAuthor, formatLicense} from '../../utils/package';

import classes from './packageList.scss';

export default class PackageList extends React.Component {
  constructor(props) {
    super(props);
    this.filteredPackages = this.renderList();
    this.numFilteredPackages = this.filteredPackages.length;
  }

  static propTypes = {
    packages: PropTypes.array,
    help: PropTypes.bool,
    filter: PropTypes.string
  };

  render() {
    this.filteredPackages = this.renderList();

    return (
      <div className="package-list-items">
        <div className={classes.pkgContainer}>
          {this.renderTitle()}
          {this.areTherePackages() && this.numFilteredPackages ? this.filteredPackages: this.renderOptions()}
        </div>
      </div>
    );
  }

  renderTitle() {
    if (!this.areTherePackages() && this.numFilteredPackages) {
      return;
    }

    return <h1 className={classes.listTitle}>{this.numFilteredPackages} Packages</h1>;
  }

  renderList() {
    const {packages, filter} = this.props;

    return packages.filter((p) => p.name.includes(filter)).map((pkg, i) => {
      const {name, version, description, time} = pkg;
      const author = formatAuthor(pkg.author);
      const license = formatLicense(pkg.license);

      return (
        <li key={i}>
          <Package {...{name, version, author, description, license, time}} />
        </li>
      );
    });
  }

  renderOptions() {
    if (!this.areTherePackages() && this.props.help) {
      return this.renderHelp();
    } else {
      return this.renderNoItems();
    }
  }

  renderNoItems() {
    return (
      <NoItems
        className="package-no-items"
        text={'No Packages Found :('}
      />
    );
  }

  renderHelp() {
    if (this.props.help) return <Help />;
  }

  areTherePackages() {
    return !isEmpty(this.props.packages);
  }
}
