import React from 'react';
import styles from './style.module.css';
import Section from '../section';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Select from '../select';

const LanguageOption = [{
    id: 1,
    name: 'english',
    title: 'English',
    code: 'en',
},
{
    id: 2,
    name: 'hindi',
    title: 'Hindi',
    code: 'hn',
},
{
    id: 3,
    name: 'spanish',
    title: 'Spanish',
    code: 'sp',
},
{
    id: 4,
    name: 'french',
    title: 'French',
    code: 'fr',
},
{
    id: 5,
    name: 'german',
    title: 'German',
    code: 'de',
},
{
    id: 6,
    name: 'italian',
    title: 'Italian',
    code: 'it',
}];

const CurrencyOption = [{
    id: 1,
    name: 'rupees',
    title: 'Rupees',
    code: 'inr',
},
{
    id: 2,
    name: 'usd',
    title: 'USD',
    code: 'usd',
},
{
    id: 3,
    name: 'eur',
    title: 'EUR',
    code: 'eur',
},
{
    id: 4,
    name: 'jpy',
    title: 'JPY',
    code: 'jpy',
},
{
    id: 5,
    name: 'gbp',
    title: 'GBP',
    code: 'gbp',
},
{
    id: 6,
    name: 'cad',
    title: 'CAD',
    code: 'cad',
},
{
    id: 7,
    name: 'aud',
    title: 'AUD',
    code: 'aud',
}];

const Topbar = () => {
    const handleLanguage = (lang) => {
        console.log(lang);
    }

    const handleCurrency = (currency) => {
        console.log('currency', currency)
    }

    return (
        <Container>
            <Row>
                <div className={styles.topbar}>
                    <div className={styles.top_link}>
                        <Link to={"/about"}>
                            <div>About Us</div>
                        </Link>
                        <Link to={"/profile"}>
                            <div>My account</div>
                        </Link>
                        <Link to={"/"}>
                            <div>Wishlist</div>
                        </Link>
                        <p>We deliver to you every day from <span>7:00 to 23:00</span></p>
                    </div>
                    <div className={styles.top_select}>
                        <Select options={LanguageOption} keyName={"title"} placeholder={"Language"} defaultValue={LanguageOption[0]} onSelect={handleLanguage} />
                        <Select options={CurrencyOption} keyName={"title"} placeholder={"Currency"} defaultValue={CurrencyOption[1]} onSelect={handleCurrency} />
                        <Link to={"/"}>
                            <div>Order Tracking</div>
                        </Link>
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default Topbar;