import React from 'react';
import styles from './ShowThumb.module.css';

function ShowThumb(props) {
  const chosenShowHandler = () => {
    props.onShowChosen({ id: props.show.id, name: props.show.name });
  };

  return (
    <div className={styles.show}>
      <img src={props.show.image.medium} width="212" height="297" alt="TV show cover" onClick={chosenShowHandler} />
      <p onClick={chosenShowHandler}>{props.show.name}</p>
    </div>
  );
}

export default ShowThumb;
