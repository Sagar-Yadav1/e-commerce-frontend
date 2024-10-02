import React from 'react';
import styles from './style.module.css';

const Category = ({ ImgUrl, title }) => {
    return (
        <div className={styles.category}>
            <img src={ImgUrl} alt="Category 1" />
            {title}
        </div>
    );
}

export default Category;