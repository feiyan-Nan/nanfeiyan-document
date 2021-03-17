import styles from './demo.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

export default class Demo extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div className={styles.normal}>
        <h1>Page demo</h1>
      </div>
    );
  }
}
