import React from 'react';
import styles from './style.module.css';
import WishlistIcon from '../../icons/wishlist';

const WishlistBar = () => {
    return (
        <div className={styles.wishlistbar}>
            <button>
                <WishlistIcon />
            </button>
            <span>2</span>
        </div>
    );
}

export default WishlistBar;