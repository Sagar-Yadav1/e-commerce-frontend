import React from 'react';
import styles from './style.module.css';
import Section from '../section';
import { Col, Container, Row } from 'react-bootstrap';
import MailIcon from '../../icons/mailIcon';
import { Link } from 'react-router-dom';
import CallIcon from '../../icons/callIcon';
import Footer1 from '../../assets/images/google.png';
import Footer2 from '../../assets/images/apple.png';
import FaceBook from '../../icons/facebook';
import Twitter from '../../icons/twitter';
import Instagram from '../../icons/instagram';
import LinkedIn from '../../icons/linkedin';
import Py1 from "../../assets/images/payment1.png";
import Py2 from "../../assets/images/payment2.png";
import Py3 from "../../assets/images/payment3.png";
import Py4 from "../../assets/images/payment4.png";
import Py5 from "../../assets/images/payment5.png";

const Footer = () => {
    return (
        <Section bgcolor={"grey"} customCss={styles.footer_section}>
            <Container>
                <Row>
                    <div className={styles.footer_head}>
                        <div className={styles.fh_cnt}>
                            <h3>Join our newsletter for £10 offs</h3>
                            <span>Register now to get latest updates on promotions &
                                coupons.Don’t worry, we not spam!</span>
                        </div>
                        <div className={styles.fh_search}>
                            <div className={styles.fhs_wrap}>
                                <MailIcon />
                                <input type="email" placeholder="Enter your email address" />
                                <button>send</button>
                            </div>
                            By subscribing you agree to our <span>Terms & Conditions and Privacy & Cookies Policy.</span>
                        </div>
                    </div>
                </Row>
                <div className={styles.footer_info}>
                    <Row>
                        <Col lg={3}>
                            <div className={styles.footer_contact}>
                                <h4>Do You Need Help ?</h4>
                                <span>Autoseligen syr. Nek diarask fröbomba. Nör
                                    antipol kynoda nynat. Pressa fåmoska.</span>
                                <div className={styles.call_cnt}>
                                    <CallIcon />
                                    <div className={styles.cc_cnt}>
                                        <span>Monday-Friday: 08am-9pm</span>
                                        <h2>0 800 300-353</h2>
                                    </div>
                                </div>
                                <div className={styles.call_cnt}>
                                    <MailIcon />
                                    <div className={styles.cc_cnt}>
                                        <span>Need help with your order?</span>
                                        <h2>info@example.com</h2>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Row>
                                <Col lg={4}>
                                    <div className={styles.fl_wrap}>
                                        <h4>Make Money with Us</h4>
                                        <ul>
                                            <li><Link to={"/"}>Sell on Grogin</Link></li>
                                            <li><Link to={"/"}>Sell Your Services on Grogin</Link></li>
                                            <li><Link to={"/"}>Sell on Grogin Business</Link></li>
                                            <li><Link to={"/"}>Sell Your Apps on Grogin</Link></li>
                                            <li><Link to={"/"}>Become an Affilate</Link></li>
                                            <li><Link to={"/"}>Advertise Your Products</Link></li>
                                            <li><Link to={"/"}>Sell-Publish with Us</Link></li>
                                            <li><Link to={"/"}>Become an Blowwe Vendor</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.fl_wrap}>
                                        <h4>Let Us Help You</h4>
                                        <ul>
                                            <li><Link to={"/"}>Accessibility Statement</Link></li>
                                            <li><Link to={"/"}>Your Orders</Link></li>
                                            <li><Link to={"/"}>Returns & Replacements</Link></li>
                                            <li><Link to={"/"}>Shipping Rates & Policies</Link></li>
                                            <li><Link to={"/"}>Refund and Returns Policy</Link></li>
                                            <li><Link to={"/"}>Privacy Policy</Link></li>
                                            <li><Link to={"/"}>Terms and Conditions</Link></li>
                                            <li><Link to={"/"}>Cookie Settings</Link></li>
                                            <li><Link to={"/"}>Help Center</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className={styles.fl_wrap}>
                                        <h4>Get to Know Us</h4>
                                        <ul>
                                            <li><Link to={"/"}>Careers for Grogin</Link></li>
                                            <li><Link to={"/"}>About Grogin</Link></li>
                                            <li><Link to={"/"}>Inverstor Relations</Link></li>
                                            <li><Link to={"/"}>Grogin Devices</Link></li>
                                            <li><Link to={"/"}>Customer reviews</Link></li>
                                            <li><Link to={"/"}>Social Responsibility</Link></li>
                                            <li><Link to={"/"}>Store Locations</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={3}>
                            <div className={styles.footer_app}>
                                <h4>Download our app</h4>
                                <div className={styles.fa_img}>
                                    <img src={Footer1} alt="" />
                                    <span>Download App Get
                                        -10% Discount</span>
                                </div>
                                <div className={styles.fa_img}>
                                    <img src={Footer2} alt="" />
                                    <span>Download App Get
                                        -10% Discount</span>
                                </div>
                                <h5>Follow us on social media:</h5>
                                <div className={styles.footer_icons}>
                                    <FaceBook />
                                    <Twitter />
                                    <Instagram />
                                    <LinkedIn />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <div className={styles.footer_payment}>
                        <div className={styles.footer_cards}>
                            Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right reserved. Powered by <span>BlackRise Themes.</span>
                            <div className={styles.payment_img}>
                                <img src={Py1} alt="" />
                                <img src={Py2} alt="" />
                                <img src={Py3} alt="" />
                                <img src={Py4} alt="" />
                                <img src={Py5} alt="" />
                            </div>
                        </div>
                        <div className={styles.footer_links}>
                            <Link to={"/"}>Terms and Conditions</Link>
                            <Link to={"/"}>Privacy Policy</Link>
                            <Link to={"/"}>Order Tracking</Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </Section>
    );
}

export default Footer;