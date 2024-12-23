import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Cat, Dog } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import styles from "./FilterLost.module.css";
import LocationPicker from "../locationPicker/LocationPicker.js";
import DatePickerComponent from "../datePicker/DatePicker.js";

const FilterLost = ({ filters, setFilters }) => {
  const [isPetTypeOpen, setIsPetTypeOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [resetFilters, setResetFilters] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 880);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 880);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [resetKey, setResetKey] = useState({});

const handleResetFilters = () => {
  console.log("Reset Filters clicked");
  setFilters({
    petType: "all",
    petAge: [],
    gender: "all",
    location: "",
    lostDate: null,
  });

  setResetKey({});
};



return (
  <div className={styles.filter}>
    {!isMobile ? (
      <div className={styles.filterContainer}>
        <div className={styles.filterHeader}>Filter</div>
        <div className={styles.filterRow}>
          <p className={styles.filterTitle}>Filters</p>
          <button
            className={styles.resetButton}
            onClick={handleResetFilters}
          >
            Reset Filters
          </button>
        </div>
        {/* Date Picker */}
        <div className={styles.filterSection}>
          <div
            className={styles.filterToggle}
            onClick={() => setIsDateOpen(!isDateOpen)}
          >
            <p>Date of Lost</p>
            {isDateOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          {isDateOpen && (
            <DatePickerComponent
              resetKey={resetKey}
              onChange={(selectedDate) => {
                setFilters((prevFilters) => ({
                  ...prevFilters,
                  lostDate: selectedDate,
                }));
              }}
            />
          )}
        </div>
        {/* Location Picker */}
        <div className={styles.filterSection}>
          <div
            className={styles.filterToggle}
            onClick={() => setIsLocationOpen(!isLocationOpen)}
          >
            <p>Location</p>
            {isLocationOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          {isLocationOpen && (
            <LocationPicker
              resetKey={resetKey}
              onChange={(location) =>
                setFilters((prevFilters) => ({ ...prevFilters, location }))
              }
            />
          )}
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
                  filters.petType === "all" ? styles.active : ""
                }`}
                onClick={() => setFilters({ ...filters, petType: "all" })}
              >
                All
              </button>
              <button
                className={`${styles.filterButton} ${
                  filters.petType === "cat" ? styles.active : ""
                }`}
                onClick={() => setFilters({ ...filters, petType: "cat" })}
              >
                <Cat size={16} /> Cat
              </button>
              <button
                className={`${styles.filterButton} ${
                  filters.petType === "dog" ? styles.active : ""
                }`}
                onClick={() => setFilters({ ...filters, petType: "dog" })}
              >
                <Dog size={16} /> Dog
              </button>
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
              <button
                className={`${styles.filterButton} ${
                  filters.gender === "all" ? styles.active : ""
                }`}
                onClick={() => setFilters({ ...filters, gender: "all" })}
              >
                All
              </button>
              <button
                className={`${styles.filterButton} ${
                  filters.gender === "male" ? styles.active : ""
                }`}
                onClick={() => setFilters({ ...filters, gender: "male" })}
              >
                <FontAwesomeIcon icon={faMars} size="sm" /> Male
              </button>
              <button
                className={`${styles.filterButton} ${
                  filters.gender === "female" ? styles.active : ""
                }`}
                onClick={() => setFilters({ ...filters, gender: "female" })}
              >
                <FontAwesomeIcon icon={faVenus} size="sm" /> Female
              </button>
            </div>
          )}
        </div>
      </div>
    ) : (
        <div className={styles.filterContainer}>
          {/* Mobile Filter */}
          <div
            style={{
              width: "100%",
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <p className={styles.filterHeader}>Filter</p>
            <div
              style={{
                backgroundColor: "#675bc8",
                cursor: "pointer",
                padding: "10px",
                borderRadius: "5px",
                color: "white"
              }}
              onClick={() => {setIsFilterOpen(!isFilterOpen);
                              setIsDateOpen(false);
                              setIsGenderOpen(false);
                              setIsLocationOpen(false);
                              setIsPetTypeOpen(false);
              }}
            >
              {isFilterOpen ? <p>Close</p> : <p>Open</p>}
            </div>
          </div>

          {isFilterOpen && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: "10px",
                paddingTop: "10px",
              }}
            >
              <div className={styles.filterRow}>
                <p>Filters</p>
                <button
                  className={styles.resetButton}
                  onClick={handleResetFilters}
                >
                  Reset Filters
                </button>
              </div>
              {/* Date Picker */}
              <div className={styles.filterSection}>
                <div
                  className={styles.filterToggle}
                  onClick={() => setIsDateOpen(!isDateOpen)}
                >
                  <p>Date of Lost</p>
                  {isDateOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {isDateOpen && (
                  <DatePickerComponent
                    resetKey={resetKey}
                    onChange={(selectedDate) => {
                      setFilters((prevFilters) => ({
                        ...prevFilters,
                        lostDate: selectedDate,
                      }));
                    }}
                  />
                )}
              </div>
              {/* Location Picker */}
              <div className={styles.filterSection}>
                <div
                  className={styles.filterToggle}
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                >
                  <p>Location</p>
                  {isLocationOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {isLocationOpen && (
                  <LocationPicker
                    resetKey={resetKey}
                    onChange={(location) =>
                      setFilters((prevFilters) => ({ ...prevFilters, location }))
                    }
                  />
                )}
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
                        filters.petType === "all" ? styles.active : ""
                      }`}
                      onClick={() =>
                        setFilters({ ...filters, petType: "all" })
                      }
                    >
                      All
                    </button>
                    <button
                      className={`${styles.filterButton} ${
                        filters.petType === "cat" ? styles.active : ""
                      }`}
                      onClick={() =>
                        setFilters({ ...filters, petType: "cat" })
                      }
                    >
                      <Cat size={16} /> Cat
                    </button>
                    <button
                      className={`${styles.filterButton} ${
                        filters.petType === "dog" ? styles.active : ""
                      }`}
                      onClick={() =>
                        setFilters({ ...filters, petType: "dog" })
                      }
                    >
                      <Dog size={16} /> Dog
                    </button>
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
                    <button
                      className={`${styles.filterButton} ${
                        filters.gender === "all" ? styles.active : ""
                      }`}
                      onClick={() =>
                        setFilters({ ...filters, gender: "all" })
                      }
                    >
                      All
                    </button>
                    <button
                      className={`${styles.filterButton} ${
                        filters.gender === "male" ? styles.active : ""
                      }`}
                      onClick={() =>
                        setFilters({ ...filters, gender: "male" })
                      }
                    >
                      <FontAwesomeIcon icon={faMars} size="sm" /> Male
                    </button>
                    <button
                      className={`${styles.filterButton} ${
                        filters.gender === "female" ? styles.active : ""
                      }`}
                      onClick={() =>
                        setFilters({ ...filters, gender: "female" })
                      }
                    >
                      <FontAwesomeIcon icon={faVenus} size="sm" /> Female
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterLost;
