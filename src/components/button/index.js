import React from 'react';
import styles from './style.module.css';
import ArrowIcon from '../../icons/arrow';

const Button = ({ onClick, type, btnstyle, text, arrow, customCss }) => {
    return (
        <button onClick={onClick} type={type} className={`${styles.button} ${styles[btnstyle]} ${customCss}`}>
            {text}
            {arrow ? <ArrowIcon /> : ""}
        </button>

    );
}

export default Button;