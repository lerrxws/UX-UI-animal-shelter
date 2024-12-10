import React, { useState } from 'react';

import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "../styles/Lost/Date.module.css";
import ImageCarousel from "../../components/ImageCarousel";
import InputField from "../../components/InputField";
import Dropdown from '../../components/Dropdown';


const Description = () => {
    const images = [
        "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image2.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1652366604/docs/demo_image5.jpg",
        "https://res.cloudinary.com/demo/image/upload/v1652345874/docs/demo_image1.jpg",
      ];
      const [petName, setPetName] = useState('');
      const [petType, setPetType] = useState('');
      const petOptions = [
        { value: 'dog', label: 'Dog' },
        { value: 'cat', label: 'Cat' },
        { value: 'bird', label: 'Bird' },
        { value: 'other', label: 'Other' },
      ];
    return (
        <div className={styles.date}>
            <Header></Header>
            <BasicBreadcrumbs></BasicBreadcrumbs>
            <div className={styles.main}>
                <div>
                    <div>
                        {/* <ImageCarousel images={images}></ImageCarousel> */}
                    </div>
                    <div style={{
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'row'
}}>
                    {/* <InputField
                        label="Pet name"
                        placeholder="Value"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        name="petName"
                    /> */}
                    <Dropdown
                        label="Pet Type"
                        options={petOptions}
                        value={petType}
                        onChange={(e) => setPetType(e.target.value)}
                        name="petType"
                    />
                    <Dropdown
                        label="Pet Type"
                        options={petOptions}
                        value={petType}
                        onChange={(e) => setPetType(e.target.value)}
                        name="petType"
                    />
                    </div>
                </div>
                <Button variant={"secondary"}>Continue</Button>
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

export default Description;