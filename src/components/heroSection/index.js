import React from 'react';
import Section from '../section';
import { Col, Container, Row } from 'react-bootstrap';
import Img from '../../assets/images/heroimg.png';
import styles from './style.module.css';
import Button from '../button';
import ArrowIcon from '../../icons/arrow';

const HeroSection = () => {
    return (
        <Section bgImg={Img} customCss={styles.hero_section}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className={styles.herowrap}>
                            <div className={styles.hero_cnt}>
                                <span>Weekend Discount</span>
                                <h1>Get the best quality products at the lowest prices</h1>
                                <p>We have prepared special discounts for you on organic breakfast <br /> products.</p>
                                <div className={styles.hero_btn}>
                                    <Button text={"Shop Now"} btnstyle={"fill"} customCss={styles.shop_btn} arrow={<ArrowIcon />} />
                                    <div className={styles.hero_price}>
                                        <span>$21.67 <del>$59.99</del></span>
                                        <p>Don't miss this limited time offer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </Section>
    );
}

export default HeroSection;