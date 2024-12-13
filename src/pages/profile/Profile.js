import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header';
import BasicBreadcrumbs from '../../components/basicBreadcrumbs/BasicBreadcrumbs';
import Footer from '../../components/footer/Footer';
import { pets } from "../../constants/index";
import styles from './Profile.module.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Profile = () => {
  const {id} = useParams();
  console.log(id);
  const pet = pets.find((pet) => pet.id === id);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pages = [
    { label: 'Home', url: '/' },
    { label: 'Lost & Found', url: '/lost&found' },
    {label: 'Lost', url: '/lost'},
    { label: 'Profile', url: `/profile/${id}` },
  ];

  const renderImages = () => {
    const isSmallScreen = window.innerWidth <= 768;
  
    const getImageClass = (index) => {
      switch (index) {
        case 1:
          return styles.image_with_effect_1;
        case 2:
          return styles.image_with_effect_2;
        default:
          return styles.single_image; 
      }
    };
  
    if (pet.images.length === 1) {
      return (
        <div className={styles.single_image_container}>
          <img 
            src={pet.images[0]}
            alt="Pet"
            className={styles.single_image}
          />
        </div>
      );
    }
  
    return (
      <Carousel
        showThumbs={!isSmallScreen}
        showIndicators={isSmallScreen}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        thumbWidth={80}
        dynamicHeight={true}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${styles.carousel_arrow} ${styles.carousel_arrow_prev} ${
                hasPrev ? styles.carousel_arrow_visible : styles.carousel_arrow_hidden
              }`}
              onClick={clickHandler}
            >
              <div className={styles.arrow_circle_bg}>
                <ArrowBackIcon className={styles.carousel_arrow_icon} />
              </div>
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${styles.carousel_arrow} ${styles.carousel_arrow_next} ${
                hasNext ? styles.carousel_arrow_visible : styles.carousel_arrow_hidden
              }`}
              onClick={clickHandler}
            >
              <div className={styles.arrow_circle_bg}>
                <ArrowForwardIcon className={styles.carousel_arrow_icon} />
              </div>
            </div>
          );
        }}
      >
        {pet.images.map((image, index) => (
          <div key={index}>
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className={getImageClass(index)} // Apply the dynamic class
            />
          </div>
        ))}
      </Carousel>
    );
  };
  



  return (
    <div className={styles.profile}>
            <Header></Header>
            <BasicBreadcrumbs pages={pages}></BasicBreadcrumbs>
            <div className={styles.body}>
              <div className={styles.carousel_container}>
              {renderImages()}
              </div> 
              <div className={styles.report}>
                <p>Found Pet Report</p>
                <div className={styles.section}>
                  <p className={styles.caption}>About This Pet</p>
                  <div className={styles.subsection}>
                    <p className={styles.subsection_label}>Found Date</p>
                    <p className={styles.subsection_value}>{pet.lostDate}</p>
                  </div>
                  <hr className="solid" />
                  <div className={styles.subsection}>
                    <p className={styles.subsection_label}>Found Near</p>
                    <p className={styles.subsection_value}>{pet.location}</p>
                  </div>
                  <hr className="solid" />
                  <div className={styles.subsection}>
                    <p className={styles.subsection_label}>Chip Number</p>
                    <p className={styles.subsection_value}>{pet.chipNumber}</p>
                  </div>
                  <hr className="solid" />
                  <div className={styles.subsection}>
                    <p className={styles.subsection_label}>Gender</p>
                    <p className={styles.subsection_value}>{pet.gender}</p>
                  </div>
                </div>
                <div className={styles.section}>
                  <p>Note From Finder</p>
                  <div className={styles.info}>
                    <p>{pet.note}</p>
                  </div>
                </div>
                <div className={styles.section}>
                  <p>Finder's Contacts</p>
                  <div className={styles.subsection}>
                    <p className={styles.subsection_label}>Phone Number</p>
                    <p className={styles.subsection_value}>{pet.phoneNumber}</p>
                  </div>
                  <hr className="solid" />
                  <div className={styles.subsection}>
                    <p className={styles.subsection_label}>Email</p>
                    <p className={styles.subsection_value}>{pet.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <Footer></Footer>
        </div>
  )
}

export default Profile