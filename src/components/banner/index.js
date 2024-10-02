import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Section from '../section';
import styles from './style.module.css';
import Button from '../button';
import ArrowIcon from '../../icons/arrow';

const Banner = ({ BgImg, tag, title, description, isBig = false }) => {
    return (
        <Section bgImg={BgImg} customCss={styles.banner_section}>

            <div className={styles.banner} >
                <Col lg={7}>
                    <div className={isBig ? styles.banner_wrap2 : styles.banner_wrap}>
                        <h4>{tag}</h4>
                        <h2>{title}</h2>
                        <span>{description}</span>
                        <Button text={"Shop Now"} arrow={<ArrowIcon />} customCss={styles.banner_btn} />
                    </div>
                </Col>
            </div >
        </Section >
    );
}

export default Banner;