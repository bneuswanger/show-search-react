import React, { useRef } from 'react';

import styles from './SearchForm.module.css';
import Button from './Button';
import Card from './Card';

function SearchForm(props) {
  const searchInputRef = useRef();

  const showSearchHandler = async (e) => {
    e.preventDefault();
    const query = searchInputRef.current.value;
    props.onShowSearched(query);
    searchInputRef.current.value = '';
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={showSearchHandler}>
        <input ref={searchInputRef} type="text" placeholder="Enter a show name" name="query" />
        <Button>Search</Button>
      </form>
    </Card>
  );
}

export default SearchForm;
