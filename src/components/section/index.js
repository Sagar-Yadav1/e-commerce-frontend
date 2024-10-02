import React from "react";
import styles from "./style.module.css";

const Section = ({ bgcolor, pb, pt, ptb, customCss, bgImg, children }) => {
    return (
        <div
            className={`${styles.section} ${styles[bgcolor]} ${styles["pb_" + pb]} ${styles["pt_" + pt]} ${styles[ptb]
                } ${customCss}
         ${bgImg ? styles.bgImg : ""} ${customCss}`}
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            {children}
        </div>
    )
}

export default Section;