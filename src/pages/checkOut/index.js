import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/product1.png";
import Section from "../../components/section";

const CheckOut = () => {

  return (
    <Section pt={"30"} pb={"30"} className={styles.checkout}>
      <Container>
        <Row>
          <Col lg={7}>
            <div className={styles.checkoutFormInfo}>
              <h6>checkout</h6>
              <div className={styles.cfi_login}>
                <span> Returning customer?</span>{" "}
                <span>
                  <Link>Click here to log in</Link>
                </span>
              </div>
              <form>
                <h6>Billing Detail</h6>
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
                  <label>Company Name (Optional)</label>
                  <input type="text" />
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
                  <label>Street Address</label>
                  <input
                    type="text"
                    placeholder="House number and street name ..."
                    style={{ marginBottom: "10px" }}
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit, etc (Optional)"
                  />
                </div>
                <div className={styles.f_option}>
                  <label>Town / City *</label>
                  <input type="text" />
                </div>
                <div className={styles.f_option}>
                  <label>State / County *</label>
                  <select>
                    <option>US</option>
                    <option>Indian</option>
                    <option>Dubai</option>
                    <option>UK</option>
                    <option>Chaina</option>
                  </select>
                </div>
                <div className={styles.f_option}>
                  <label>Zip Code *</label>
                  <input type="text" />
                </div>
                <div className={styles.f_option}>
                  <label>Phone Number *</label>
                  <input type="number" />
                </div>{" "}
                <div className={styles.f_option}>
                  <label>Email Address *</label>
                  <input type="email" />
                </div>
                <div className={styles.f_check_acount}>
                  <input type="checkbox" />
                  <span>Create an account?</span>
                </div>
              </form>
              <div className={styles.productInfoAdd}>
                <h6>Additional Information</h6>

                <label>Order Notes (Optional)</label>
                <textarea></textarea>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className={styles.yourOrderDetials}>
              <div className={styles.cfi_login1}>
                <span> Have a coupon? </span>
                <span>
                  <Link>Click here to enter your code</Link>
                </span>
              </div>
              <div className={styles.yod_product}>
                <h6>Your Order</h6>
                <div className={styles.yodp_subTotal}>
                  <div className={styles.pt_total}>
                    <span>Product</span>
                    <span>sub total</span>
                  </div>
                  <div className={styles.yods_productinfi}>
                    <img src={image1} />
                    <div className={styles.yodp_title}>
                      <h6>Pinnaeple Macbook Pro 2022 M1/ 512GB</h6>
                      <span>x 3</span>
                    </div>
                  </div>
                  <div className={styles.yodp_worldFree}>
                    <span>Worldwide Standard Shipping Free</span>
                    <span>+ $9.50</span>
                  </div>
                  <div className={styles.yodp_TotalOrder}>
                    <span>Order Total</span>
                    <span>$1,746.50</span>
                  </div>
                </div>
                <div className={styles.yodp_money}>
                  <p>
                    <input type="checkbox" />
                    <span>Direct Bank Transfer</span>

                    <small>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </small>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <span>Cash on Delivery</span>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <span>
                      Paypal <Link>What’s Paypal?</Link>
                    </span>
                  </p>
                  <button>place order</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};
export default CheckOut;
