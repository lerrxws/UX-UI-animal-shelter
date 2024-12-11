import BasicBreadcrumbs from "../../components/basicBreadcrumbs/BasicBreadcrumbs";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import styles from "./LostFound.module.css";
import Button from "../../components/button/Button";
import { useNavigate } from 'react-router-dom';

const LostFound = () => {
    const pages = [
        { label: 'Home', url: '/' },
        { label: 'Lost & Found', url: '/lost&found' },
      ];

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className={styles.lost_found}>
            <Header></Header>
            <BasicBreadcrumbs pages={pages}></BasicBreadcrumbs>
            <div className={styles.lost_found__container}>
                <div className={styles.main_content}>
                    We're here to help you find your pet
                    <div className={styles.button__container}>
                        <Button variant="secondary" onClick={() => handleNavigation('/lost')}>I Lost a Pet</Button>
                        <Button>I Found a Pet</Button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LostFound;