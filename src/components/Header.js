import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>TV Show Cast Search</h1>
      <h3>
        Powered by{' '}
        <a href="http://www.tvmaze.com" target="_blank" rel="noreferrer">
          tvmaze.com
        </a>
      </h3>
      <img src="https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80" alt="television on table" />
      <h2>Search for a TV Show, then Click Thumbnail to View the Cast</h2>
      <h3>Note: Show results will clear if no cast information is available.</h3>
    </header>
  );
};

export default Header;
