import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import './styles/CustomCheckbox.css';

export default function CustomCheckbox({ name, value, filters, handleFilterChange }) {
  return (
    <Checkbox
      name={name}
      value={value}
      checked={Array.isArray(filters[name]) && filters[name].includes(value)}
      onChange={handleFilterChange}
      icon={<div className="custom-checkbox-icon" />}
      checkedIcon={
        <div className="custom-checkbox-checked-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.285 5.675C19.895 5.285 19.265 5.285 18.875 5.675L9 15.55L5.125 11.675C4.735 11.285 4.105 11.285 3.715 11.675C3.325 12.065 3.325 12.695 3.715 13.085L8.295 17.665C8.685 18.055 9.315 18.055 9.705 17.665L20.285 7.085C20.675 6.695 20.675 6.065 20.285 5.675Z"
              fill="#675BC8"
            />
          </svg>
        </div>
      }
    />
  );
}
