import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from './style.module.css';

const NewButton = ({ buttonStyle = "fill", link, title, onClick }) => {
    return (
        <Fragment>
            {link ? <Link to={link} className={`${styles.button}  ${styles[buttonStyle]}`} >
                {title}
            </Link > :
                <button className={`${styles.button}  ${styles[buttonStyle]}`} onClick={onClick}>
                    {title}
                </button>
            }
        </Fragment>
    )
}

export default NewButton;