import React from 'react';
import styles from './style.module.css';
import WishlistIcon from '../../icons/wishlist';
import Organic from '../../icons/organic';
import ColdSale from '../../icons/coldSale';
import StarIcon from '../../icons/starIcon';
import { Link } from 'react-router-dom';

const Products = ({ discount, ProductImg, productLogo = true, starRating, title, price, discountPrice, time, isAvailable = false, inStock = false, id }) => {
    return (
        <div className={styles.products_main}>
            <div className={styles.product_wrap}>
                <div className={styles.pm_top}>
                    <span>{discount}</span>
                    <WishlistIcon />
                </div>
                <div className={styles.product_img}>
                    <Link to={`/singleProduct/${id}`}>
                        <img src={ProductImg} alt="Product Image" />
                    </Link>
                </div>
                <div className={styles.product_content}>
                    <div className={styles.product_count}>
                        <div className={styles.pc_cnt}>
                            {productLogo ? <div className={styles.pc_cnt1}>
                                <Organic />
                                <span>Organic</span>
                            </div>
                                :
                                <div className={styles.pc_cnt2}>
                                    <ColdSale />
                                    <span>Cold Sale</span>
                                </div>
                            }
                        </div>
                        <div className={styles.pc_input}>
                            <button>-</button>
                            <input type="number" value={1} />
                            <button>+</button>
                        </div>
                    </div>
                    <div className={styles.product_star}>
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <span>{starRating}</span>
                    </div>
                    <div className={styles.product_cnt}>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles.product_price}>
                        <span>{price} <del>{discountPrice}</del></span>
                    </div>
                    {isAvailable ?
                        <div className={styles.product_available}>
                            <span>This product is about to run out</span>
                            <div className={styles.pa_clr}></div>
                            <p>available only:{time}</p>
                        </div>
                        :
                        ""
                    }
                    {inStock ?
                        <div className={styles.product_stock}>
                            <span>In Stock</span>
                        </div>
                        :
                        ""
                    }
                </div>
            </div>
        </div>
    );
}

export default Products;