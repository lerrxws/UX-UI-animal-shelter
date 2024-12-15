import React from 'react';
import styles from './Card.module.css';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className={styles.main}>
      <div className={styles.image_container}>
        <img src={props.img} alt="" className={styles.img}></img>
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{props.petType}</div>
        <div className={styles.properties}>
          <div className={styles.prop_container}>
            <p className={styles.text}>Gender: </p>
            <p className={styles.prop}>{props.gender}</p>
          </div>
          <div className={styles.prop_container}>
            <p className={styles.text}>Found: </p>
            <p className={styles.prop}>{props.lostDate}</p>
          </div>
          <div className={styles.prop_container}>
            <p className={styles.text}>Location: </p>
            <p className={styles.prop}>{props.location}</p>
          </div>
        </div>
      </div>
      <Link to={`/profile/${props.id}`}>
        <Button>
        More Info
        </Button>
      </Link>
    </div>
  );
}

export default Card;
