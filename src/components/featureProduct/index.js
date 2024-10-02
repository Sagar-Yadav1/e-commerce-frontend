import React from 'react';
import Section from '../section';
import BgImg from "../../assets/images/bannerimg3.png";
import styles from './style.module.css';
import Button from '../button';
import ArrowIcon from '../../icons/arrow';

const FeatureProduct = () => {
    return (
        <Section bgImg={BgImg} customCss={styles.feature_section}>
            <div className={styles.feature_wrap}>
                <h5>Only This Week</h5>
                <h2>A smart store for every people</h2>
                <span>Feed your family the best</span>
            </div>
            <div className={styles.feature_btn}>
                <Button text={"Shop Now"} arrow={<ArrowIcon />} customCss={styles.btn_wrap} />
            </div>
        </Section>
    );
}

export default FeatureProduct;