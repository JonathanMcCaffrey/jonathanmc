import * as React from 'react';
import styles from '../styles/_global.module.scss';

export default class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.inner}>
        <h1>Jonathan McCaffrey</h1>
      </div>
    );
  }
}
