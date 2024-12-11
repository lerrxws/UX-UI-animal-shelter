import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import styles from "./Header.module.css";
import { BiMenuAltRight, BiUser } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import Button from "../button/Button";
import logo from "../../assets/logo.png"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div className={styles.logo} onClick={() => handleNavigation('/')}>
                    <span className={styles.logo}><img src={logo} alt="Logo" className={styles.image} /></span>
                </div>
                <div>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                        <div className={styles.nav__item} href={"/"}>
                            Adopt
                        </div>
                        <div className={styles.nav__item} href={"/"}>
                            Donate
                        </div>
                        <div className={styles.nav__item} onClick={() => handleNavigation('/lost&found')}>
                            Lost & Found
                        </div>
                        <div className={styles.nav__button__container}>
                        <Button
                                variant="custom"
                                startIcon={BiUser}
                            >
                                Login
                            </Button>
                        </div>
                    </nav>
                </div>
                <div>
                    <div className={styles.header__button__container}>
                    <Button
                                variant="custom"
                                startIcon={BiUser}
                            >
                                Login | Register
                    </Button>
                    </div>
                    <button className={styles.header__toggler} onClick={menuToggler}>
                        {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
                    </button>
                </div>
            </div>
        </div>
    );
};


export default Header;