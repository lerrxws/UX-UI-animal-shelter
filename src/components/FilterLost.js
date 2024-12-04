import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Cat, Dog } from 'lucide-react';
import CustomCheckBox from './CustomCheckbox.js';
import styles from './styles/Filter.module.css';
import LocationPicker from './LocationPicker.js';

const FilterLost = ({ filters, setFilters }) => {
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
            <div>
                <LocationPicker></LocationPicker>
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
            </div>
    </div>
  );
};

export default FilterLost;
