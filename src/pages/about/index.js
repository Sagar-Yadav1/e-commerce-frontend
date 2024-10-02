import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../../assets/images/about2.png";
import image2 from "../../assets/images/about3.png";
import image3 from "../../assets/images/about4.png";
import image4 from "../../assets/images/about5.png";
import image5 from "../../assets/images/about6.png";
import image6 from "../../assets/images/about7.png";
import image7 from "../../assets/images/about8.png";
import Button from "../../components/button";
import Section from "../../components/section";

const About = () => {

  return (
    <Section pt={"30"} pb={"30"} className={styles.about}>
      <Container className={styles.a_backImage}>
        <Row>
          <Col lg={5}>
            <div className={styles.ab_title}>
              <h4>Best experience</h4>
              <span>always wins</span>
              <p>
                #1 Online Marketplace for Electronic & Technology <br /> in
                Mahanttan, CA
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={styles.about2}>
        <Row>
          <Col lg={5}>
            <div className={styles.a_enrich}>
              <h6>
                our purpose is to
                <span>
                  {" "}
                  enrich
                  <br /> and enhance lives
                </span>{" "}
                through
                <br /> technology
              </h6>
            </div>
          </Col>
          <Col lg={7}>
            <Row>
              <Col lg={4}>
                <div className={styles.a_reviewTotal}>
                  <h2>$12,5M</h2>
                  <span>
                    total revenue from <br />
                    2001 - 2023
                  </span>
                </div>
              </Col>
              <Col lg={4}>
                <div className={styles.a_reviewTotal}>
                  <h2>12K+</h2>
                  <span>
                    orders delivered
                    <br /> successful on everyday
                  </span>
                </div>
              </Col>
              <Col lg={4}>
                <div className={styles.a_reviewTotal}>
                  <h2>725+</h2>
                  <span>
                    store and office in U.S
                    <br /> and worldwide
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className={styles.about3}>
        <Row>
          <Col lg={6}>
            <div className={styles.delivery}>
              <img src={image1} />
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.delivery_title}>
              <h6>
                We connect millions of buyers and sellers around the world,
                empowering people & creating economic opportunity for all.
              </h6>
              <p>
                Within our markets, millions of people around the world connect,
                both online and offline, to make, sell and buy unique goods. We
                also offer a wide range of Seller Services and tools that help
                creative entrepreneurs start, manage & scale their businesses.
              </p>
              <Button text={" OUR SHOWREEL"} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={styles.about4}>
        <Row>
          <Col lg={4}>
            <div className={styles.authenticProduct}>
              <div className={styles.aproduct_title}>
                <h6>100% authentic products</h6>
                <span></span>
              </div>
              <p>
                Swoo Tech Mart just distribute 100% authorized products &
                guarantee quality. Nulla porta nulla nec orci vulputate, id
                rutrum sapien varius.
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.authenticProduct}>
              <div className={styles.aproduct_title}>
                <h6>fast delivery</h6>
                <span></span>
              </div>
              <p>
                Fast shipping with a lots of option to delivery. 100% guarantee
                that your goods alway on time and perserve quality.
              </p>
            </div>
          </Col>{" "}
          <Col lg={4}>
            <div className={styles.authenticProduct}>
              <div className={styles.aproduct_title}>
                <h6>affordable price</h6>
                <span></span>
              </div>
              <p>
                We offer an affordable & competitive price with a lots of
                special promotions.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={styles.mission_vision}>
              <h6>our mission and vision</h6>
              <p>
                Nam maximus nunc a augue pulvinar, non euismod mauris tempus.
                Cras non elit vel magna molestie pellentesque in eu dui. Donec
                laoreet quis erat vitae finibus. Vestibulum enim eros, porta
                eget quam et, euismod dictum elit. Nullam eu tempus magna. Fusce
                malesuada nisi id felis placerat porta vel sed augue. Vivamus
                mollis mauris vitae rhoncus egestas. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas.
              </p>
              <img src={image2} alt="" />
              <div className={styles.mv_stores}>
                <h6>from a retail store to the global chain of stores</h6>
                <p>
                  Pellentesque laoreet justo nec ex sodales euismod. Aliquam
                  orci tortor, bibendum nec ultricies ac, auctor nec purus.
                  Maecenas in consectetur erat.
                </p>
              </div>
            </div>
            <Row className={styles.min_vis}>
              <Col lg={6}>
                <div className={styles.mv_date}>
                  <p>
                    <strong>1997:</strong>
                    <span>A small store located in Brooklyn Town, USA</span>
                  </p>
                  <p>
                    <strong>1998:</strong>
                    <span>
                      It is a long established fact that a reader will be
                      distracted by the readable
                    </span>
                  </p>{" "}
                  <p>
                    <strong>2000:</strong>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </span>
                  </p>{" "}
                  <p>
                    <strong>2002:</strong>
                    <span>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the
                    </span>
                  </p>{" "}
                  <p>
                    <strong>2004:</strong>
                    <span>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text
                    </span>
                  </p>{" "}
                  <p>
                    <strong>2005:</strong>
                    <span>
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to
                      using 'Content here
                    </span>
                  </p>{" "}
                  <p>
                    <strong>2006:</strong>
                    <span>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable.
                    </span>
                  </p>
                  <p>
                    <strong>2010:</strong>
                    <span>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined
                    </span>
                  </p>
                  <p>
                    <strong>2013:</strong>
                    <span>Lorem Ipsum comes from sections 1.10.32</span>
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className={styles.mv_date}>
                  <p>
                    <strong>2014:</strong>
                    <span>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form
                    </span>
                  </p>
                  <p>
                    <strong>2016:</strong>
                    <span>
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary
                    </span>
                  </p>{" "}
                  <p>
                    <strong>2020:</strong>
                    <span>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </span>
                  </p>{" "}
                  <p>
                    <strong>2021:</strong>
                    <span>
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the
                    </span>
                  </p>{" "}
                  <p>
                    <strong>2022:</strong>
                    <span>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text
                    </span>
                  </p>{" "}
                  <p>
                    <strong>2023:</strong>
                    <span>
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal distribution of letters, as opposed to
                      using 'Content here
                    </span>
                  </p>{" "}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className={styles.leaderships}>
              <h6>leaderships</h6>
              <div className={styles.l_images}>
                <ul>
                  <li>
                    <img src={image3} />
                    <h6>Henry Avery</h6>
                    <span>Chairman</span>
                  </li>
                  <li>
                    <img src={image4} />
                    <h6>Henry Avery</h6>
                    <span>Chairman</span>
                  </li>
                  <li>
                    <img src={image5} />
                    <h6>Henry Avery</h6>
                    <span>Chairman</span>
                  </li>
                  <li>
                    <img src={image6} />
                    <h6>Henry Avery</h6>
                    <span>Chairman</span>
                  </li>
                  <li>
                    <img src={image7} />
                    <h6>Henry Avery</h6>
                    <span>Chairman</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
export default About;
