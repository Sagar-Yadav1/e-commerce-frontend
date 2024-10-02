import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to={"/"}>
                <img src={logo} alt="Logo" />
            </Link>
        </div>

    );
}

export default Logo;