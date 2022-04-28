import React from 'react';
import Card from './Card';
import ShowThumb from './ShowThumb';
import styles from './ShowDisplay.module.css';

function ShowDisplay(props) {
  let resultsContent;
  if (props.searchedFor === '') {
    resultsContent = 'You forgot to enter a search term!';
  }
  if (props.searchedFor !== '' && props.shows.length === 0) {
    resultsContent = 'Sorry! No results found; try something else.';
  }
  if (props.searchedFor !== '' && props.shows.length >= 1) {
    resultsContent = `Viewing results for "${props.searchedFor}"`;
  }

  const chosenShowHandler = (chosenShowData) => {
    props.onShowChosen(chosenShowData);
  };

  return (
    <Card>
      {<p className={styles.viewing}>{resultsContent}</p>}
      <main className={styles['show-display']}>{props.shows.map((result) => result.show.image && <ShowThumb onShowChosen={chosenShowHandler} key={result.show.id} show={result.show} />)}</main>
    </Card>
  );
}

export default ShowDisplay;
