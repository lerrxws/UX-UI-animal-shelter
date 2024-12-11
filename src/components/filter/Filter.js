import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Cat, Dog } from 'lucide-react';
import CustomCheckBox from '../customCheckbox/CustomCheckbox.js';
import styles from './Filter.module.css';

const Filter = ({ filters, setFilters }) => {
  const [isPetTypeOpen, setIsPetTypeOpen] = useState(false);
  const [isPetAgeOpen, setIsPetAgeOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === 'checkbox' && (name === 'petAge' || name === 'gender')) {
      setFilters((prevFilters) => {
        const currentFilter = prevFilters[name];
        if (Array.isArray(currentFilter)) {
          return {
            ...prevFilters,
            [name]: checked
              ? [...currentFilter, value]
              : currentFilter.filter((v) => v !== value),
          };
        }
        return prevFilters;
      });
    } else if (name === 'petType') {
      setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    }
  };

  return (
    <div className={styles.filter}>
        <div className={styles.filterContainer}>
            <div className={styles.filterHeader}>Filter</div>
            <div className={styles.filterRow}>
                <p className={styles.filterTitle}>Filters</p>
                <button
                className={styles.resetButton}
                onClick={() => setFilters({ petType: 'all', petAge: [], gender: [] })}
                >
                Reset Filters
                </button>
            </div>

            {/* Pet Type */}
            <div className={styles.filterSection}>
                <div
                className={styles.filterToggle}
                onClick={() => setIsPetTypeOpen(!isPetTypeOpen)}
                >
                <p>Pet Type</p>
                {isPetTypeOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {isPetTypeOpen && (
                <div className={styles.filterOptions}>
                    <button
                    className={`${styles.filterButton} ${
                        filters.petType === 'all' ? styles.active : ''
                    }`}
                    onClick={() => setFilters({ ...filters, petType: 'all' })}
                    >
                    All
                    </button>
                    <button
                    className={`${styles.filterButton} ${
                        filters.petType === 'cat' ? styles.active : ''
                    }`}
                    onClick={() => setFilters({ ...filters, petType: 'cat' })}
                    >
                    <Cat size={16} /> Cat
                    </button>
                    <button
                    className={`${styles.filterButton} ${
                        filters.petType === 'dog' ? styles.active : ''
                    }`}
                    onClick={() => setFilters({ ...filters, petType: 'dog' })}
                    >
                    <Dog size={16} /> Dog
                    </button>
                </div>
                )}
            </div>

            {/* Pet Age */}
            <div className={styles.filterSection}>
                <div
                className={styles.filterToggle}
                onClick={() => setIsPetAgeOpen(!isPetAgeOpen)}
                >
                <p>Pet Age</p>
                {isPetAgeOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {isPetAgeOpen && (
                <div className={styles.filterOptions}>
                    {['0-1', '1-3', '3+'].map((range) => (
                    <div key={range} className={styles.checkboxContainer}>
                        <CustomCheckBox
                        name="petAge"
                        value={range}
                        filters={filters}
                        handleFilterChange={handleFilterChange}
                        />
                        <span>{range} y.</span>
                    </div>
                    ))}
                </div>
                )}
            </div>

            {/* Gender */}
            <div className={styles.filterSection}>
                <div
                className={styles.filterToggle}
                onClick={() => setIsGenderOpen(!isGenderOpen)}
                >
                <p>Gender</p>
                {isGenderOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {isGenderOpen && (
                <div className={styles.filterOptions}>
                    {['Female', 'Male'].map((gender) => (
                    <div key={gender} className={styles.checkboxContainer}>
                        <CustomCheckBox
                        name="gender"
                        value={gender.toLowerCase()}
                        filters={filters}
                        handleFilterChange={handleFilterChange}
                        />
                        <span>{gender}</span>
                    </div>
                    ))}
                </div>
                )}
            </div>
            </div>
    </div>
  );
};

export default Filter;
