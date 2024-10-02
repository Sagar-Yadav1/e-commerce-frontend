import React from "react";
import styles from "./style.module.css";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import RightArrowIcon from "../../icons/arrow";
import image1 from "../../assets/images/profile1.png";
import Section from "../../components/section";

const Profile = () => {

  return (
    <Section pt={"30"} pb={"30"} className={styles.profile}>
      <Container className={styles.p_bgColor}>
        <Row>
          <Col lg={3}>
            <div className={styles.p_user}>
              <div className={styles.pu_image}>
                <img src={image1} />
              </div>
              <h5>Naresh Prajapat</h5>
              <div className={styles.pu_email}>
                <NavLink>swoo@gmail.com</NavLink>
              </div>
              <div className={styles.pu_acountInfo}>
                <button>
                  Account info{" "}
                  <span>
                    <RightArrowIcon />
                  </span>
                </button>
                <button>
                  My order
                  <span>
                    <RightArrowIcon />
                  </span>
                </button>
                <button>
                  My address
                  <span>
                    <RightArrowIcon />
                  </span>
                </button>
                <button>
                  Change password
                  <span>
                    <RightArrowIcon />
                  </span>
                </button>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className={styles.p_acountInfo}>
              <h4>Account info</h4>
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
                <label> Email Address *</label>
                <input type="email" placeholder="swoo@gmail.com" />
                <label>Phone Number (Optional)</label>
                <input type="number" placeholder="+ 1234-567-789" />
                <button>save</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
export default Profile;
