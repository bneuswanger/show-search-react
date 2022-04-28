import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Cast Photo Search</h1>
      <h2>for Television Shows</h2>
      <p>
        Powered by{' '}
        <a href="http://www.tvmaze.com" target="_blank" rel="noreferrer">
          tvmaze.com
        </a>
      </p>
    </header>
  );
};

export default Header;
