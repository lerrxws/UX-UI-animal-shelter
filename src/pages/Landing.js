import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./styles/Landing.module.css";

import image from "../assets/landing_page.png"

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

export default Landing;