import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./styles/Lost.module.css";
import React, { useState } from 'react';

import image from "../assets/question.png"
import Filter from "../components/Filter";
import FilterLost from "../components/FilterLost";
import Pagination from "../components/Pagination";
import Card from '../components/Card';
import { pets } from "../constants/index";

const Lost = () => {
    const [filters, setFilters] = useState({
        petType: 'all',
        petAge: [],
        gender: [],
      });
    return (
        <div className={styles.lost}>
            <Header></Header>
            <BasicBreadcrumbs></BasicBreadcrumbs>
            <hr class="solid"></hr>
            <div className={styles.lost__container}>
                <div className={styles.info_banner}>
                    <p style={{marginTop: "20px", marginBottom: "20px"}}>Lost a Pet? Let Us Help You Find Them!</p>
                    <hr class="solid"></hr>
                    <div className={styles.how_works}>
                        <p style={{marginTop: "20px"}}>How Does the Lost Section Work?</p>
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
                        <img src={image} alt="" className={styles.image}></img>
                        </div>
                        <div className={styles.report}>
                            <p className={styles.p1}>Your Pet Isn’t Listed?</p>
                            <p className={styles.p2}>Please fill out the form to help us assist you in finding your lost pet</p>
                            <Button>Report</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <hr class="solid"></hr>
                </div>
                <div className={styles.pet_list}>
                    <div className={styles.filter}>
                    {/* <Filter filters={filters} setFilters={setFilters}></Filter> */}
                    <FilterLost filters={filters} setFilters={setFilters}></FilterLost>
                    </div>
                    <div className={styles.pets}>
                        <div className={styles.pet_container}>
                        {pets.map((pet) => (
                            <Card img="https://via.placeholder.com/150"
                                key={pet.id}
                                name={pet.name}
                                gender={pet.gender}
                                age="3 years">
                            </Card>
                        ))}
                        </div>  
                        
                        {/* <div className={styles.pet_row}>
                            <Card img="https://via.placeholder.com/150"
                                name="Max"
                                gender="Male"
                                age="3 years">
                            </Card>
                            <Card img="https://via.placeholder.com/150"
                                name="Max"
                                gender="Male"
                                age="3 years">
                            </Card>
                            <Card img="https://via.placeholder.com/150"
                                name="Max"
                                gender="Male"
                                age="3 years">
                            </Card>
                        </div>
                        <div className={styles.pet_row}>
                            <Card img="https://via.placeholder.com/150"
                                name="Max"
                                gender="Male"
                                age="3 years">
                            </Card>
                            <Card img="https://via.placeholder.com/150"
                                name="Max"
                                gender="Male"
                                age="3 years">
                            </Card>
                            <Card img="https://via.placeholder.com/150"
                                name="Max"
                                gender="Male"
                                age="3 years">
                            </Card>
                        </div>
                        <div className={styles.pet_row}>
                            <Card img="https://via.placeholder.com/150"
                                name="Max"
                                gender="Male"
                                age="3 years">
                            </Card>
                            <Card img="https://via.placeholder.com/150"
                                name="Max"
                                gender="Male"
                                age="3 years">
                            </Card>
                            <Card img="https://via.placeholder.com/150"
                                name="Max"
                                gender="Male"
                                age="3 years">
                            </Card>
                        </div>
                        <div className={styles.pet_row}>
                            <Card img="https://via.placeholder.com/150"
                                name="Max"
                                gender="Male"
                                age="3 years">
                            </Card>
                            <Card img="https://via.placeholder.com/150"
                                name="Max"
                                gender="Male"
                                age="3 years">
                            </Card>
                            <Card img="https://via.placeholder.com/150"
                                name="Max"
                                gender="Male"
                                age="3 years">
                            </Card>
                        </div> */}
                        {/* <div className={styles.pages}> */}
                        <div>
                            <Pagination></Pagination>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

const Button = ({ startIcon: StartIcon, children, variant }) => {
    return (
        <button
            className={`${styles.button} ${variant === "secondary" ? styles.button_secondary: ""}`}
        >
            {StartIcon && <StartIcon className={styles.icon} />}
            {children}
        </button>
    );
};

export default Lost;