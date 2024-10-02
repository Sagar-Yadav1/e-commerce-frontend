import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BannerImg from "../../assets/images/bannerImg.png";
import styles from './style.module.css';

const BannerDiscount = () => {
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <div className={styles.banner_main}>
                        <div className={styles.banner_cnt}>
                            <h3>In store or online your health & safety is our top priority</h3>
                            <span>The only supermarket that makes your life easier, makes you enjoy life and makes it better</span>
                        </div>
                        <div className={styles.banner_discount}>
                            %50
                        </div>
                        <div className={styles.banner_image}>
                            <img src={BannerImg} alt="Banner Image" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default BannerDiscount;