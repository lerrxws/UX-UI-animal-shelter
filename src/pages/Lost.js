import React, { useState, useEffect } from "react";
import BasicBreadcrumbs from "../components/bacicBreadcrumb/BasicBreadcrumbs";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from "./styles/Lost.module.css";
import image from "../assets/question.png";
import FilterLost from "../components/filterLost/FilterLost";
import Pagination from "@mui/material/Pagination";
import Card from "../components/card/Card";
import Button from "../components/button/Button";
import { pets } from "../constants/index";

const Lost = () => {
  const [filters, setFilters] = useState({
    petType: "all",
    petAge: [],
    gender: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerRow, setCardsPerRow] = useState(3);
  const rowsPerPage = 4;
  const itemsPerPage = rowsPerPage * cardsPerRow;

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
    const totalPages = Math.ceil(pets.length / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [itemsPerPage, currentPage]);

  const totalPages = Math.ceil(pets.length / itemsPerPage);
  const currentPets = pets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className={styles.lost}>
      <Header />
      <BasicBreadcrumbs />
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
              <p className={styles.p1}>Your Pet Isn’t Listed?</p>
              <p className={styles.p2}>
                Please fill out the form to help us assist you in finding your
                lost pet
              </p>
              <Button variant="secondary">Report</Button>
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
              {currentPets.map((pet, index) => (
                <Card
                  img="https://via.placeholder.com/150"
                  key={pet.id}
                  name={pet.name}
                  petType={pet.petType}
                  gender={pet.gender}
                  lostDate={pet.lostDate}
                  location={pet.location}
                  age="3 years"
                />
              ))}
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
