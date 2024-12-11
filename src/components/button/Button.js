import React from 'react';
import styles from './Button.module.css';

const Button = ({ startIcon: StartIcon, children, variant, onClick, disabled }) => {
    return (
        <button
            className={`${styles.button} 
            ${variant === "secondary" ? styles.button_secondary : ""}
            ${variant === "custom" ? styles.button_custom : ""}`}
            onClick={onClick}
            disabled={disabled}
        >
            {StartIcon && <StartIcon className={styles.icon} />}
            {children}
        </button>
    );
};

export default Button;
