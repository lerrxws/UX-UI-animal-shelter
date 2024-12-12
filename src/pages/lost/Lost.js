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
import { useNavigate } from "react-router-dom";
import question from "../../assets/question-dark.png";
import report from "../../assets/report.png";
import reunite from "../../assets/reunite.png";
import arrow from "../../assets/next-step.png";

const Lost = () => {
  const [filters, setFilters] = useState({
    petType: "all",
    gender: "all",
    lostDate: null,
    location: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerRow, setCardsPerRow] = useState(3);
  const rowsPerPage = 4;
  const itemsPerPage = rowsPerPage * cardsPerRow;

  const filteredPets = pets.filter((pet) => {
    const typeMatch =
      filters.petType === "all" ||
      pet.petType.toLowerCase() === filters.petType.toLowerCase();

    const genderMatch =
      !filters.gender ||
      filters.gender.toLowerCase() === "all" ||
      pet.gender.toLowerCase() === filters.gender.toLowerCase();

    const dateMatch =
      !filters.lostDate ||
      new Date(pet.lostDate) >= new Date(filters.lostDate);

    const locationMatch =
      !filters.location ||
      pet.location?.toLowerCase().trim().includes(filters.location.toLowerCase().trim());

    return typeMatch && genderMatch && dateMatch && locationMatch;
  });

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
    { label: "Home", url: "/" },
    { label: "Lost & Found", url: "/lost&found" },
    { label: "Lost", url: "/lost" },
  ];

  return (
    <div className={styles.lost}>
      <Header />
      <BasicBreadcrumbs pages={pages} />
      <hr className="solid" />
      <div className={styles.lost__container}>
        <div className={styles.info_banner}>
          <p style={{ marginTop: "20px", marginBottom: "20px" }}>
            Lost a Pet? Let Us Help You Find Them!
          </p>
          <hr className="solid" />
          <div className={styles.how_works}>
            <p className={styles.p}>How Does the Lost Section Work?</p>
            <div className={styles.info_list}>
              <div className={styles.step}>
                <img src={question} alt="" className={styles.img_step} />
                <p className={styles.i1}>1. Search the List</p>
                <p className={styles.i2}>
                  Browse through the list of found animals to check if your pet
                  has been reported.
                </p>
              </div>
              <div className={styles.arrow}>
                <img src={arrow} alt="" />
              </div>
              <div className={styles.step}>
                <img src={report} alt="" className={styles.img_step} />
                <p className={styles.i1}>2. Submit a Report</p>
                <p className={styles.i2}>
                  If your pet isn’t listed, create a lost pet report with
                  details and a photo.
                </p>
              </div>
              <div className={styles.arrow}>
                <img src={arrow} alt="" />
              </div>
              <div className={styles.step}>
                <img src={reunite} alt="" className={styles.img_step} />
                <p className={styles.i1}>3. Reunite with Your Pet</p>
                <p className={styles.i2}>
                  Once there’s a match, our team will help you reconnect with
                  your beloved pet.
                </p>
              </div>
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
              <Button
                variant="secondary"
                onClick={() => handleNavigation("/report")}
              >
                Report
              </Button>
            </div>
          </div>
        </div>
        <hr className="solid" />
        <div className={styles.pet_list}>
          <div className={styles.filter}>
            <FilterLost filters={filters} setFilters={setFilters} />
          </div>
          <div className={styles.pets}>
            {currentPets.length > 0 ? (
              <div className={styles.pet_container}>
                {currentPets.map((pet) => (
                  <Card
                    img={pet.img}
                    key={pet.id}
                    id={pet.id}
                    name={pet.name}
                    petType={pet.petType}
                    gender={pet.gender}
                    lostDate={pet.lostDate}
                    location={pet.location}
                    age={pet.age}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.no_results}>
                No pets found matching your filters.
              </div>
            )}
            {totalPages > 1 && (
              <div className={styles.pagination}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  shape="rounded"
                  color="primary"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "#675bc8",
                      "&.Mui-selected": {
                        backgroundColor: "#675bc8",
                        color: "white",
                      },
                    },
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Lost;
