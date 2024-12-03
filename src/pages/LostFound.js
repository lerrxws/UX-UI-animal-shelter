import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./styles/LostFound.module.css";

const LostFound = () => {
    return (
        <div className={styles.lost_found}>
            <Header></Header>
            <BasicBreadcrumbs></BasicBreadcrumbs>
            <div className={styles.lost_found__container}>
                <div className={styles.main_content}>
                    We're here to help you find your pet
                    <div className={styles.button__container}>
                        <Button variant="secondary">I Lost a Pet</Button>
                        <Button>I Found a Pet</Button>
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

export default LostFound;