import React from 'react';
import styles from './style.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Img1 from '../../assets/images/card1.png';
import Img2 from '../../assets/images/card2.png';
import Img3 from '../../assets/images/card3.png';
import Img4 from '../../assets/images/card4.png';
import Section from '../section';

const Cards = () => {
    return (
        <Section customCss={styles.card_section}>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className={styles.cards_wrap}>
                            <img src={Img1} alt="" />
                            <div className={styles.cards_cnt}>
                                <h3>Payment only online</h3>
                                <span>Tasigförsamhet beteendedesign. Mobile
                                    checkout. Ylig kärrtorpa.</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={styles.cards_wrap}>
                            <img src={Img2} alt="" />
                            <div className={styles.cards_cnt}>
                                <h3>New stocks and sales</h3>
                                <span>Tasigförsamhet beteendedesign. Mobile
                                    checkout. Ylig kärrtorpa.</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={styles.cards_wrap}>
                            <img src={Img3} alt="" />
                            <div className={styles.cards_cnt}>
                                <h3>Quality assurance</h3>
                                <span>Tasigförsamhet beteendedesign. Mobile
                                    checkout. Ylig kärrtorpa.</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={styles.cards_wrap}>
                            <img src={Img4} alt="" />
                            <div className={styles.cards_cnt}>
                                <h3>Delivery from 1 hour</h3>
                                <span>Tasigförsamhet beteendedesign. Mobile
                                    checkout. Ylig kärrtorpa.</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default Cards;