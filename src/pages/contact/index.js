import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import TwitterIcon from "../../icons/twitter";
import FacebookIcon from "../../icons/facebook";
import InstagramIcon from "../../icons/instagram";
import YoutubeIcon from "../../icons/youtube";
import BeIcon from "../../icons/bee";
import image1 from "../../assets/images/contact1.png";
import Section from "../../components/section";

const Contact = () => {

  return (
    <Section pt={"30"} pb={"30"} className={styles.contact}>
      <Container className={styles.c_padding}>
        <Row>
          <Col lg={7}>
            <h6 className={styles.c_main}>ready to work with us</h6>
            <div className={styles.contactUs}>
              <p>Contact us for all your questions and opinions</p>
              <form>
                <div className={styles.pa_name_last}>
                  <div className={styles.pnl1}>
                    <label>First Name *</label>
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className={styles.pnl2}>
                    <label>Last Name *</label>
                    <input type="text" placeholder="Last Name " />
                  </div>
                </div>
                <div className={styles.f_option}>
                  <label>Email Address *</label>
                  <input type="email" />
                </div>
                <div className={styles.f_option}>
                  <label>Phone Number (Optional)</label>
                  <input type="number" />
                </div>
                <div className={styles.f_option}>
                  <label>Country / Region *</label>
                  <select>
                    <option>US</option>
                    <option>Indian</option>
                    <option>Dubai</option>
                    <option>UK</option>
                    <option>Chaina</option>
                  </select>
                </div>

                <div className={styles.f_option}>
                  <label>Subject (Optional)</label>
                  <select>
                    <option>US</option>
                    <option>Indian</option>
                    <option>Dubai</option>
                    <option>UK</option>
                    <option>Chaina</option>
                  </select>
                </div>
                <div className={styles.c_message}>
                  <label>Message</label>
                  <textarea placeholder="Note about your order, e.g. special note for delivery " />
                </div>
                <div className={styles.c_check}>
                  <input type="checkbox" />
                  <span>
                    I want to receive news and updates once in a while. By
                    submitting, I’m agreed to the <Link>Terms & Conditons</Link>
                  </span>
                </div>
                <div>
                  <Button text={"SEND MESSAGE"} customCss={styles.c_sendMessage} />
                </div>
              </form>
            </div>
          </Col>
          <Col lg={5}>
            <div className={styles.c_united}>
              <div className={styles.cu_1}>
                <small> united states (head quater)</small>
                <p>
                  152 Thatcher Road St, Mahattan, 10463, US
                  <br /> (+025) 3886 25 16 <br />
                  <Link>hello@swattechmart.com</Link>
                </p>
                <span>united kingdom (branch)</span>
                <p>
                  12 Buckingham Rd, Thornthwaite, HG3 4TY, UK
                  <br />
                  (+718) 895-5350 <br />
                  <Link> contact@swattechmart.co.uk</Link>
                </p>
                <ul>
                  <li>
                    <Link>
                      <TwitterIcon />
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <FacebookIcon />
                    </Link>
                  </li>{" "}
                  <li>
                    <Link>
                      <InstagramIcon />
                    </Link>
                  </li>{" "}
                  <li>
                    <Link>
                      <YoutubeIcon />
                    </Link>
                  </li>{" "}
                  <li>
                    <Link>
                      <BeIcon />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.cu_1Image}>
                <img src={image1} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
export default Contact;
