import React, { useState } from "react";

import styles from "./styles/Header.module.css";

import { BiMenuAltRight, BiUser } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";

import logo from "../assets/logo.png"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div>
                    <span className={styles.logo}><img src={logo} alt="Logo" className={styles.image} /></span>
                </div>
                <div>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                        <a className={styles.nav__item} href={"/"}>
                            Adopt
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            Donate
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            Lost & Found
                        </a>
                        <div className={styles.nav__button__container}>
                        <Button
                                variant="outlined"
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
                                variant="outlined"
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

const Button = ({ startIcon: StartIcon, children, variant }) => {
    return (
        <button
            className={`${styles.button} ${variant === "outlined" ? styles.outlined : ""}`}
        >
            {StartIcon && <StartIcon className={styles.icon} />}
            {children}
        </button>
    );
};

export default Header;