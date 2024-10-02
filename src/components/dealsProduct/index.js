import React from 'react';
import styles from './style.module.css';
import WishlistIcon from '../../icons/wishlist';
import SaleTime from '../saletiming';
import StarIcon from '../../icons/starIcon';
import Plus from '../../icons/plus';
import Organic from '../../icons/organic';
import ColdSale from '../../icons/coldSale';

const Deals = ({ percent, DealsImg, time1, time2, time3, time4, productLogo = true, title, num, price, delPrice }) => {
    return (
        <div className={styles.dealsProduct}>
            <div className={styles.dp_img}>
                <div className={styles.deals_percent}>
                    <span>{percent}</span>
                    <WishlistIcon />
                </div>
                <img src={DealsImg} alt="" />
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
                <div className={styles.deal_sale}>
                    <span>{time1}</span>
                    <span>{time2}</span>
                    <span>{time3}</span>
                    :
                    <span>{time4}</span>
                </div>
            </div>
            <div className={styles.dp_cnt}>
                <h2>{title}</h2>
                <div className={styles.dp_star}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <span>{num}</span>
                </div>
                <div className={styles.dp_price}>
                    <span> {price} </span>
                    <del>{delPrice}</del>
                </div>
                <div className={styles.deal_btn}>
                    <button>Add to cart</button>
                    <div className={styles.db_icon}><Plus /></div>
                </div>
            </div>
        </div>
    );
}

export default Deals;