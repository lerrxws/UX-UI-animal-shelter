import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ label, placeholder, value, onChange, name, isMessage }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {isMessage ? (
        <textarea
          id={name}
          name={name}
          className={styles.textarea}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type="text"
          id={name}
          name={name}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default InputField;
