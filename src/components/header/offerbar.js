import React from "react";
import styles from "./style.module.css";
import Section from "../section";
import { Container, Row, Col } from "react-bootstrap";
import SaleTime from "../saletiming";

const OfferBar = () => {
    return (
        <Section bgcolor={"blue"} ptb={"ptb_16"}>
            <Container>
                <Row>
                    <Col className={styles.offerBar}>
                        <div className={styles.offer_cnt}>
                            <p>FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
                        </div>
                        <div className={styles.offer_time}>
                            <SaleTime />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default OfferBar;