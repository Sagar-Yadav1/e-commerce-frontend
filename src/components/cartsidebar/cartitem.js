import React from 'react';
import styles from './style.module.css';
import ImgUrl from '../../assets/images/product1.png';

const CartItem = () => {
    return (
        <div className={styles.cartitem}>
            <div className={styles.cart_img}>
                <img src={ImgUrl} alt="Product 1" />
            </div>
            <div className={styles.details}>
                <h6>Cantaloupe Melon Fresh Organic Cut</h6>
                <p>Price: $21</p>
                <div className={styles.cart_input}>
                    <button>-</button>
                    <input type="number" value={2} />
                    <button>+</button>
                </div>
            </div>
            <div className={styles.cart_remove}>
                <button>Remove</button>
            </div>
        </div>
    );
}

export default CartItem;