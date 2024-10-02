import React, { useState } from 'react';
import styles from './style.module.css';
import CartIcon from '../../icons/carticon';
import Button from '../button';
import CartItem from './cartitem';
import CrossIcon from '../../icons/cross';
import { Link } from 'react-router-dom';

const CartSideBar = () => {
    const [opensidebar, setOpenSideBar] = useState(false);

    const handleOpen = () => {
        setOpenSideBar(true);
        document.body.style.overflow = "hidden";
    }

    const handleClose = () => {
        setOpenSideBar(false);
        document.body.style.overflow = "";
    }
    return (
        <>

            <div className={styles.cartsidebar}>
                <button onClick={handleOpen}>
                    <CartIcon />
                </button>
                <span>2</span>
            </div>
            {opensidebar &&
                <div className={styles.sidebar}>
                    <div className={styles.sidebar_wrap}>
                        <div className={styles.sb_title}>
                            <h2>Shopping</h2>
                            <span>[2]</span>
                            <div onClick={handleClose}>
                                <CrossIcon />

                            </div>
                        </div>
                        <div className={styles.side_cartitems}><CartItem /> <CartItem /> <CartItem /> <CartItem /> <CartItem /> <CartItem /> <CartItem /> <CartItem /> <CartItem /> <CartItem /></div>
                        <div className={styles.cart_footer}>
                            <button><Link to={"/checkout"}>Checkout</Link></button>
                            <button><Link to={"/card"}>View Cart</Link></button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default CartSideBar;