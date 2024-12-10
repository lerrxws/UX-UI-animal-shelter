import React from 'react';
import styles from './styles/Dropdown.module.css';

const Dropdown = ({ label, options, value, onChange, name }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        className={styles.dropdown}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
