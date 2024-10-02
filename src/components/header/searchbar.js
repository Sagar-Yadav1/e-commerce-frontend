import React from 'react';
import styles from './style.module.css';
import { Container, Row } from 'react-bootstrap';
import Logo from '../logo';
import Location from '../../icons/location';
import SearchIcon from '../../icons/search';
import CartSideBar from '../cartsidebar';
import WishlistBar from '../wishlistbar';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../icons/profile';
import LocationData from '../locationdata';

const SearchBar = () => {
    return (
        <Container>
            <Row>
                <div className={styles.searchBar}>
                    <Logo />
                    <div className={styles.delivery}>
                        <LocationData />
                    </div>
                    <div className={styles.top_search}>
                        <input type="text" className={styles.searchInput} placeholder="Search for products, categories or brands..." />
                        <button className={styles.searchButton}>
                            <SearchIcon />
                        </button>
                    </div>
                    <div className={styles.registration}>
                        <Link to={"/login"}>
                            <div className={styles.reg_icon}>
                                <ProfileIcon />
                            </div>
                            <span>Sign In <br /><b>Account</b></span>
                        </Link>
                    </div>
                    <div className={styles.sidebtns}>
                        <WishlistBar />
                        <CartSideBar />
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default SearchBar;