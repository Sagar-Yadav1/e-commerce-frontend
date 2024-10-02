import React from 'react';
import Img from '../../assets/images/newarrival.png';
import StarIcon from '../../icons/starIcon';
import Section from '../section';
import BgImg from '../../assets/images/banner4.png';
import styles from './style.module.css';
import { Col } from 'react-bootstrap';

const NewArrivals = () => {
    return (
        <div className={styles.newarrivals}>
            <div className={styles.na_wrap}>
                <div className={styles.arrival_wrap}>
                    <div className={styles.aw_wrap}>
                        <img src={Img} alt="" />
                    </div>
                    <div className={styles.aw_cnt}>
                        <h3>Machic</h3>
                        <span>Featured</span>
                        <div className={styles.aw_icon}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <span>41</span>
                        </div>
                    </div>
                </div>
                <p>Good quality product can only be found in good stores</p>
            </div>
            <Section bgImg={BgImg} customCss={styles.arrival_section}>
                <Col lg={8}>
                    <div className={styles.arival_banner}>
                        <h5>Only This Week</h5>
                        <h2>Where flavor meets affordability.</h2>
                        <span>Only this week. Don’t miss...</span>
                    </div>
                </Col>
            </Section>
        </div>
    );
}

export default NewArrivals;