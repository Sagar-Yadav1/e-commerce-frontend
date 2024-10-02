import React from "react";
import styles from "./style.module.css";

const SaleTime = () => {
    const date = new Date();
    return (
        <div className={styles.saletime}>
            <p>Until the end of the sale:</p>
            <div className={styles.sale_count}>
                <span className={styles.sale_num}>47 <span className={styles.sale_cnt}>days
                </span></span>
                <span className={styles.sale_num}>06 <span className={styles.sale_cnt}>hours
                </span></span>
                <span className={styles.sale_num}>59 <span className={styles.sale_cnt}>minutes
                </span></span>
                <span className={styles.sale_num}>59 <span className={styles.sale_cnt}>sec
                </span></span>
            </div>
        </div >
    )
}

export default SaleTime;