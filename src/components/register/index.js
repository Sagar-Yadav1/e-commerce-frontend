import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/images/login.svg.png";
import { Link } from "react-router-dom";
import EyeIcon from "../../icons/eyeIcon";
import styles from "./style.module.css";

const Register = () => {

    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({ ...input, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    };

    return (
        <div className={styles.login}>
            <Container className={styles.login_wrap}>
                <Row>
                    <Col lg={6}>
                        <div className={styles.l_image}>
                            <img src={image} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.l_form}>
                            <div className={styles.lf_heading}>
                                <h3>Register</h3>
                                <p>Join to us</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name="text"
                                    placeholder="Jhon Deo"
                                    onChange={handleInputChange}
                                />
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    onChange={handleInputChange}
                                />
                                <label>Password</label>
                                <div className={styles.password}>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        id="password"
                                        onChange={handleInputChange}
                                    />
                                    <span className={styles.lf_eye}>
                                        <EyeIcon />
                                    </span>
                                </div>
                                <label>Confirm Password</label>
                                <div className={styles.password}>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        id="password"
                                        onChange={handleInputChange}
                                    />
                                    <span className={styles.lf_eye}>
                                        <EyeIcon />
                                    </span>
                                </div>
                                <div className={styles.lf_forgetPassword}>
                                    Forget Password ?
                                </div>
                                <button type="submit">LOGIN</button>
                            </form>
                            <div className={styles.l_newuser}>
                                <span>already user</span>
                                <span>
                                    <Link to={"/login"}>login</Link>
                                </span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Register;
