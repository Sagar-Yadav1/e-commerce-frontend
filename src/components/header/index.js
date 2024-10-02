import React, { Fragment } from 'react';
import OfferBar from './offerbar';
import Topbar from './topbar';
import SearchBar from './searchbar';
import Navbar from './navbar';
import styles from './style.module.css';


const Header = () => {
    return (
        <Fragment>
            <OfferBar />
            <Topbar />
            <SearchBar />
            <Navbar />
        </Fragment>
    )
}

export default Header;