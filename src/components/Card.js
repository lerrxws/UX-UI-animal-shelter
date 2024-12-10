import React, { useState } from 'react';
import styles from './styles/Card.module.css';

function Card(props) {
    return (
      <div className={styles.main}>
        <div className={styles.image_container}>
            <img src={props.img} alt='' className={styles.img}></img>
        </div>
        <div className={styles.body}>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.props}>
                <div className={styles.prop_container}>
                    <p className={styles.text}>Gender: </p>
                    <p className={styles.prop}>{props.gender}</p>
                </div>
                <div className={styles.prop_container}>
                    <p className={styles.text}>Age: </p>
                    <p className={styles.prop}>{props.age} </p>
                </div>
            </div>         
        </div>
        <Button>More Info</Button>
      </div>
    );
  }

  const Button = ({ startIcon: StartIcon, children, variant }) => {
    return (
        <button
            className={`${styles.button} ${variant === "secondary" ? styles.button_secondary: ""}`}
        >
            {StartIcon && <StartIcon className={styles.icon} />}
            {children}
        </button>
    );
};
  
  export default Card;