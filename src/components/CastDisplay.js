import React, { Fragment } from 'react';
import styles from './CastDisplay.module.css';
import CastThumb from './CastThumb';
import Button from './Button';
import Card from './Card';

function CastDisplay(props) {
  const { cast } = props;

  const hasPics = () => {
    let picsPresent = false;
    for (let member of cast) {
      if (member.character.image !== null) {
        picsPresent = true;
      }
    }
    return picsPresent;
  };

  let content;
  if (cast.length >= 1 && hasPics()) {
    content = `Viewing cast for "${props.show}"`;
  } else {
    content = `Sorry, no cast photos are available for "${props.show}"`;
  }
  const handleBack = () => {
    props.onHandleBack();
  };
  return (
    <Fragment>
      <Card>
        {<p className={styles.viewing}>{content}</p>}
        {props.cast.length >= 1 && <main className={styles['cast-display']}>{props.cast.map((result) => result.character.image && <CastThumb key={result.character.id} img={result.character.image.medium} character={result.character.name} gender={result.person.gender} birthday={result.person.birthday} playedBy={result.person.name} url={result.character.url} />)}</main>}
      </Card>
      <Button onClick={handleBack}>Back</Button>
    </Fragment>
  );
}

export default CastDisplay;
