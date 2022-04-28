import React from 'react';
import styles from './CastThumb.module.css';

function CastThumb(props) {
  const ageCalc = (birthday) => {
    let today = new Date();
    let age;
    if (birthday === null) {
      age = 'n/a';
    } else {
      let birthDate = new Date(birthday);
      age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
    }
    return age;
  };
  const personAge = ageCalc(props.birthday);
  let gender;
  if (props.gender === 'Female') {
    gender = 'Actress';
  } else if (props.gender === 'Male') {
    gender = 'Actor';
  } else {
    gender = 'Performer';
  }

  let nameStr = props.playedBy;
  let replaced = nameStr.split(' ').join('+');
  const playedByLink = `https://www.imdb.com/find?q=${replaced}&ref_=nv_sr_sm`;

  return (
    <div className={styles.cast}>
      <img src={props.img} width="212" height="297" alt="Character Headshot" />
      <a href={playedByLink} target="_blank" rel="noreferrer">
        {props.playedBy}
      </a>
      <p>plays</p>
      <a href={props.url} target="_blank" rel="noreferrer">
        {props.character}
      </a>
      <p>
        {gender} Age: {personAge}
      </p>
    </div>
  );
}

export default CastThumb;
