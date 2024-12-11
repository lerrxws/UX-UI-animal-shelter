import React, { useState, useEffect } from "react";
import BasicBreadcrumbs from "../../components/basicBreadcrumbs/BasicBreadcrumbs";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./Lost.module.css";
import image from "../../assets/question.png";
import FilterLost from "../../components/filterLost/FilterLost";
import Pagination from "@mui/material/Pagination";
import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import { pets } from "../../constants/index";
import { useNavigate } from 'react-router-dom';

const Lost = () => {
  const [filters, setFilters] = useState({
    petType: "all",
    // petAge: [],
    gender: "all",
    lostDate: null,
    location: ""
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerRow, setCardsPerRow] = useState(3);
  const rowsPerPage = 4;
  const itemsPerPage = rowsPerPage * cardsPerRow;

  // Filtering logic
  const filteredPets = pets.filter((pet) => {
    // Pet Type Filter
    const typeMatch = filters.petType === 'all' || 
      pet.petType.toLowerCase() === filters.petType.toLowerCase();

    // Age Filter
    // const ageMatch = filters.petAge.length === 0 || 
    //   filters.petAge.some(ageRange => {
    //     const [minAge, maxAge] = ageRange.split('-').map(Number);
    //     const petAge = parseInt(pet.age);
    //     return petAge >= minAge && petAge <= maxAge;
    //   });

    // Gender Filter
    const genderMatch = !filters.gender || 
    filters.gender.toLowerCase() === 'all' || 
    pet.gender.toLowerCase() === filters.gender.toLowerCase();

    // Lost Date Filter
    const dateMatch = !filters.lostDate || 
      (new Date(pet.lostDate) >= new Date(filters.lostDate));

    // Location Filter (case-insensitive, partial match)
    const locationMatch = !filters.location || 
    (pet.location?.toLowerCase().trim().includes(filters.location.toLowerCase().trim()));
  

    // Combine all filters
    // return typeMatch && ageMatch && genderMatch && dateMatch;
    console.log("Pet Location:", pet.location, "Filter Location:", filters.location);
    return typeMatch && genderMatch && dateMatch && locationMatch;
  });

  useEffect(() => {
    console.log("Filters Updated:", filters);
  }, [filters]);

  useEffect(() => {
    const calculateCardsPerRow = () => {
      if (window.innerWidth >= 1200) setCardsPerRow(4);
      else if (window.innerWidth >= 768) setCardsPerRow(3);
      else setCardsPerRow(1);
    };

    calculateCardsPerRow();
    window.addEventListener("resize", calculateCardsPerRow);

    return () => window.removeEventListener("resize", calculateCardsPerRow);
  }, []);

  useEffect(() => {
    const totalPages = Math.ceil(filteredPets.length / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [itemsPerPage, currentPage, filteredPets]);

  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);
  const currentPets = filteredPets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const pages = [
    { label: 'Home', url: '/' },
    { label: 'Lost & Found', url: '/lost&found' },
    { label: 'Lost', url: '/lost' },
  ];

  return (
    <div className={styles.lost}>
      <Header />
      <BasicBreadcrumbs pages={pages}/>
      <hr className="solid" />
      <div className={styles.lost__container}>
        <div className={styles.info_banner}>
          <p style={{ marginTop: "20px", marginBottom: "20px" }} className="">
            Lost a Pet? Let Us Help You Find Them!
          </p>
          <hr className="solid" />
          <div className={styles.how_works}>
            <p style={{ marginTop: "20px" }}>How Does the Lost Section Work?</p>
            <div className={styles.info_list}>
              <div className={styles.step}>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={styles.arrow}></div>
              <div className={styles.step}></div>
              <div className={styles.arrow}></div>
              <div className={styles.step}></div>
            </div>
          </div>
        </div>
        <div className={styles.report__container}>
          Found Animals: Displayed by Most Recent Reports
          <div className={styles.report_text_image}>
            <div className={styles.image__container}>
              <img src={image} alt="" className={styles.image} />
            </div>
            <div className={styles.report}>
              <p className={styles.p1}>Your Pet Isn't Listed?</p>
              <p className={styles.p2}>
                Please fill out the form to help us assist you in finding your
                lost pet
              </p>
              <Button variant="secondary" onClick={() => handleNavigation('/report')}>Report</Button>
            </div>
          </div>
        </div>
        <div>
          <hr className="solid" />
        </div>
        <div className={styles.pet_list}>
          <div className={styles.filter}>
            <FilterLost filters={filters} setFilters={setFilters} />
          </div>
          <div className={styles.pets}>
            <div className={styles.pet_container}>
              {currentPets.length > 0 ? (
                currentPets.map((pet, index) => (
                  <Card
                    img="https://via.placeholder.com/150"
                    key={pet.id}
                    name={pet.name}
                    petType={pet.petType}
                    gender={pet.gender}
                    lostDate={pet.lostDate}
                    location={pet.location}
                    age={pet.age}
                  />
                ))
              ) : (
                <div className={styles.no_results}>
                  No pets found matching your filters.
                </div>
              )}
            </div>
            <div className={styles.pagination}>
              {totalPages > 1 && (
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  shape="rounded"
                  color="primary"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Lost;