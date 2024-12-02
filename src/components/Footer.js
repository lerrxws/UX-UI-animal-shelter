import React, { useState } from "react";

import styles from "./styles/Footer.module.css";

import { BiMenuAltRight, BiUser } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <nav className={styles.footer__list}>
                        <a className={styles.nav__item} href={"/"}>
                            About Us
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            Contacts
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            FAQs
                        </a>
                    </nav>
        </div>
    );
};

export default Footer;