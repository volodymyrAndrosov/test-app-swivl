import React from "react";
import styles from "./Footer.module.scss";
import * as localizationKeys from "../../consts/localizationKeys";

const Footer = () => <div className={styles.Footer}>{localizationKeys.FOOTER_TEXT}</div>;

export default Footer;
