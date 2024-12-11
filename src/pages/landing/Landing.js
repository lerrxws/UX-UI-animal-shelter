import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./Landing.module.css";
import Button from "../../components/button/Button";

import image from "../../assets/landing_page.png"

const Landing = () => {
    return (
        <div className={styles.landing}>
            <Header></Header>
            <div className={styles.landing__container}>
                <div className={styles.text_button__container}>
                    Are you the one for me ?
                    <div className={styles.button__container}>
                        <Button variant="secondary">Adopt</Button>
                        <Button>Donate</Button>
                    </div>
                </div>
                <div className={styles.image__container}>
                    <img src={image} alt="" className={styles.image}></img>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};


export default Landing;