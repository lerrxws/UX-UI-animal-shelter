import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "../styles/Lost/Date.module.css";
import LocationPicker from "../../components/LocationPicker"


const Location = () => {
    return (
        <div className={styles.date}>
            <Header></Header>
            <BasicBreadcrumbs></BasicBreadcrumbs>
            <div className={styles.main}>
                <div>
                    <div className={styles.progress_bar}></div>
                    <p className={styles.text}>Where did your pet get lost?</p>
                </div>
                <LocationPicker></LocationPicker>
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

export default Location;