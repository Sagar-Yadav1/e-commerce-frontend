import React, { Fragment, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BreadCrumb from '../../components/breadcrumb';
import HeroSection from '../../components/heroSection';
import ArrowIcon from '../../icons/arrow';
import Button from '../../components/button';
import Category from '../../components/category';
import Image1 from '../../assets/images/category1.png';
import Image2 from '../../assets/images/category2.png';
import Image3 from '../../assets/images/category3.png';
import Image4 from '../../assets/images/category4.png';
import Image5 from '../../assets/images/category5.png';
import Image6 from '../../assets/images/category6.png';
import Image7 from '../../assets/images/category7.png';
import Image8 from '../../assets/images/category8.png';
import Image9 from '../../assets/images/category9.png';
import Section from '../../components/section';
import { Link } from 'react-router-dom';
import Products from '../../components/products';
import ProductImg1 from '../../assets/images/product1.png';
import ProductImg2 from '../../assets/images/product2.png';
import ProductImg3 from '../../assets/images/product3.png';
import ProductImg4 from '../../assets/images/product4.png';
import ProductImg5 from '../../assets/images/product5.png';
import ProductImg6 from '../../assets/images/product6.png';
import ProductImg7 from '../../assets/images/product7.png';
import ProductImg8 from '../../assets/images/product8.png';
import ProductImg9 from '../../assets/images/product9.png';
import ProductImg10 from '../../assets/images/product10.png';
import ProductImg11 from '../../assets/images/product11.png';
import ProductImg12 from '../../assets/images/product12.png';
import ProductImg13 from '../../assets/images/product13.png';
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReactSlider from 'react-slider';
import Img1 from '../../assets/images/brand1.png';
import Img2 from '../../assets/images/brand2.png';
import Img3 from '../../assets/images/brand3.png';
import Img4 from '../../assets/images/brand4.png';
import Img5 from '../../assets/images/brand5.png';
import Image10 from '../../assets/images/add1.png';
import ProductsData from '../../data/product.json';
import styles from './style.module.css';

const BreadCrumbItems = [
    {
        name: "Shop",
        path: "/shop"
    },
    {
        name: "Top Grocery & Products ",
        path: "/"
    },
];

const CategoryItem = [
    {
        Img: Image1,
        title: 'Fruits & Vegetables',
    },
    {
        Img: Image2,
        title: 'Baby & Pregnancy',
    },
    {
        Img: Image3,
        title: 'Beverages',
    },
    {
        Img: Image4,
        title: 'Meats & Seafood',
    },
    {
        Img: Image5,
        title: 'Biscuits & Snacks',
    },
    {
        Img: Image6,
        title: 'Breads & Bakery',
    },
    {
        Img: Image7,
        title: 'Breaksfast & Dairy',
    },
    {
        Img: Image8,
        title: 'Frozen Foods',
    },
    {
        Img: Image9,
        title: 'Grocery & Staples',
    },
]


const ProductItem = [
    {
        id: 1,
        discount: "75 %",
        Img: ProductImg1,
        productLogo: true,
        rating: "3",
        title: "100 Percent Apple Juice – 64 fl oz Bottle",
        price: "$0.50",
        discountprice: "$1.99",
        time: "23",
    },
    {
        id: 2,
        discount: "11 %",
        Img: ProductImg2,
        productLogo: false,
        rating: "3",
        title: "Great Value Rising Crust Frozen Pizza, Supreme",
        price: "$8.99",
        discountprice: "$9.99",
        time: "18",
    },
    {
        id: 3,
        discount: "41 %",
        Img: ProductImg3,
        productLogo: true,
        rating: "2",
        title: "Simply Orange Pulp Free Juice– 52 fl oz",
        price: "$2.45",
        discountprice: "$4.13",
        time: "27",
    },
    {
        id: 4,
        discount: "21 %",
        Img: ProductImg4,
        productLogo: false,
        rating: "3",
        title: "California Pizza Kitchen Margherita, Crispy Thin Crus…",
        price: "$11.77",
        discountprice: "$14.77",
        time: "19",
    },
    {
        id: 5,
        discount: "75 %",
        Img: ProductImg1,
        productLogo: true,
        rating: "3",
        title: "100 Percent Apple Juice – 64 fl oz Bottle",
        price: "$0.50",
        discountprice: "$1.99",
        time: "23",
    },
    {
        id: 6,
        discount: "11 %",
        Img: ProductImg2,
        productLogo: false,
        rating: "3",
        title: "Great Value Rising Crust Frozen Pizza, Supreme",
        price: "$8.99",
        discountprice: "$9.99",
        time: "18",
    },
    {
        id: 7,
        discount: "41 %",
        Img: ProductImg3,
        productLogo: true,
        rating: "2",
        title: "Simply Orange Pulp Free Juice– 52 fl oz",
        price: "$2.45",
        discountprice: "$4.13",
        time: "27",
    },
    {
        id: 8,
        discount: "21 %",
        Img: ProductImg4,
        productLogo: false,
        rating: "3",
        title: "California Pizza Kitchen Margherita, Crispy Thin Crus…",
        price: "$11.77",
        discountprice: "$14.77",
        time: "19",
    },
]

const ProductData = [
    {
        id: 1,
        discount: "75 %",
        Img: ProductImg1,
        productLogo: true,
        rating: "3",
        title: "100 Percent Apple Juice – 64 fl oz Bottle",
        price: "$0.50",
        discountprice: "$1.99",
        time: "23",
    },
    {
        id: 2,
        discount: "11 %",
        Img: ProductImg2,
        productLogo: false,
        rating: "3",
        title: "Great Value Rising Crust Frozen Pizza, Supreme",
        price: "$8.99",
        discountprice: "$9.99",
        time: "18",
    },
    {
        id: 3,
        discount: "41 %",
        Img: ProductImg3,
        productLogo: true,
        rating: "2",
        title: "Simply Orange Pulp Free Juice– 52 fl oz",
        price: "$2.45",
        discountprice: "$4.13",
        time: "27",
    },
    {
        id: 4,
        discount: "21 %",
        Img: ProductImg4,
        productLogo: false,
        rating: "3",
        title: "California Pizza Kitchen Margherita, Crispy Thin Crus…",
        price: "$11.77",
        discountprice: "$14.77",
        time: "19",
    },
    {
        id: 5,
        discount: "75 %",
        Img: ProductImg5,
        productLogo: true,
        rating: "3",
        title: "100 Percent Apple Juice – 64 fl oz Bottle",
        price: "$0.50",
        discountprice: "$1.99",
        time: "23",
    },
    {
        id: 6,
        discount: "11 %",
        Img: ProductImg6,
        productLogo: false,
        rating: "3",
        title: "Great Value Rising Crust Frozen Pizza, Supreme",
        price: "$8.99",
        discountprice: "$9.99",
        time: "18",
    },
    {
        id: 7,
        discount: "41 %",
        Img: ProductImg7,
        productLogo: true,
        rating: "2",
        title: "Simply Orange Pulp Free Juice– 52 fl oz",
        price: "$2.45",
        discountprice: "$4.13",
        time: "27",
    },
    {
        id: 8,
        discount: "21 %",
        Img: ProductImg8,
        productLogo: false,
        rating: "3",
        title: "California Pizza Kitchen Margherita, Crispy Thin Crus…",
        price: "$11.77",
        discountprice: "$14.77",
        time: "19",
    },
    {
        id: 9,
        discount: "75 %",
        Img: ProductImg9,
        productLogo: true,
        rating: "3",
        title: "100 Percent Apple Juice – 64 fl oz Bottle",
        price: "$0.50",
        discountprice: "$1.99",
        time: "23",
    },
    {
        id: 10,
        discount: "11 %",
        Img: ProductImg10,
        productLogo: false,
        rating: "3",
        title: "Great Value Rising Crust Frozen Pizza, Supreme",
        price: "$8.99",
        discountprice: "$9.99",
        time: "18",
    },
    {
        id: 11,
        discount: "41 %",
        Img: ProductImg11,
        productLogo: true,
        rating: "2",
        title: "Simply Orange Pulp Free Juice– 52 fl oz",
        price: "$2.45",
        discountprice: "$4.13",
        time: "27",
    },
    {
        id: 12,
        discount: "21 %",
        Img: ProductImg12,
        productLogo: false,
        rating: "3",
        title: "California Pizza Kitchen Margherita, Crispy Thin Crus…",
        price: "$11.77",
        discountprice: "$14.77",
        time: "19",
    },
    {
        id: 13,
        discount: "75 %",
        Img: ProductImg13,
        productLogo: true,
        rating: "3",
        title: "100 Percent Apple Juice – 64 fl oz Bottle",
        price: "$0.50",
        discountprice: "$1.99",
        time: "23",
    },
    {
        id: 14,
        discount: "11 %",
        Img: ProductImg2,
        productLogo: false,
        rating: "3",
        title: "Great Value Rising Crust Frozen Pizza, Supreme",
        price: "$8.99",
        discountprice: "$9.99",
        time: "18",
    },
    {
        id: 15,
        discount: "41 %",
        Img: ProductImg3,
        productLogo: true,
        rating: "2",
        title: "Simply Orange Pulp Free Juice– 52 fl oz",
        price: "$2.45",
        discountprice: "$4.13",
        time: "27",
    },
    {
        id: 16,
        discount: "21 %",
        Img: ProductImg4,
        productLogo: false,
        rating: "3",
        title: "California Pizza Kitchen Margherita, Crispy Thin Crus…",
        price: "$11.77",
        discountprice: "$14.77",
        time: "19",
    },
]

const ProductPage = () => {

    const [priceRange, setPriceRange] = useState([0, 100]);

    const handleSliderChange = (newRange) => {
        setPriceRange(newRange);
    };

    return (
        <Fragment>
            <BreadCrumb items={BreadCrumbItems} />
            <Container>
                <Row>
                    <HeroSection />
                </Row>
            </Container>
            <Container>
                <Row>
                    <div className={styles.category_head}>
                        <div className={styles.category_wrap}>
                            <h4>Top Categories</h4>
                            <span>New products with updated stocks.</span>
                            <Button text={"View All"} arrow={<ArrowIcon />} customCss={styles.cat_btn} />
                        </div>
                        <div className={styles.category_img}>
                            {CategoryItem.map((value, index) => (
                                < Category key={index} ImgUrl={value.Img} title={value.title} />
                            ))}
                        </div>
                    </div>
                </Row>
            </Container>
            <Section pt={"30"} pb={"30"}>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className={styles.product_category}>
                                <h6>categories</h6>
                                <Button text={" All Categories"} customCss={styles.product_btn} />
                                <h5>Cell Phones & Tablets</h5>
                                <ul>
                                    <li><Link to={"/"}>All</Link></li>
                                    <li><Link to={"/"}>Fruits & Vegetables</Link></li>
                                    <li><Link to={"/"}>Baby & Pregnancy</Link></li>
                                    <li><Link to={"/"}>Beverages</Link></li>
                                    <li><Link to={"/"}>Meats & Seafood</Link></li>
                                    <li><Link to={"/"}>Biscuits & Snacks</Link></li>
                                    <li><Link to={"/"}>Breads & Bakery</Link></li>
                                    <li><Link to={"/"}>Breaksfast & Dairy</Link></li>
                                    <li><Link to={"/"}>Frozen Foods</Link></li>
                                    <li><Link to={"/"}>Grocery & Staples</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className={styles.best_head}>Best seller in this category</div>
                            <Row>
                                <div className={styles.product_data}>
                                    <Swiper
                                        modules={[Pagination, Autoplay]}
                                        spaceBetween={20}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        onInit={(swiper) => {
                                            swiper.el.addEventListener("mouseenter", () => {
                                                swiper.autoplay.stop();
                                            });
                                            swiper.el.addEventListener("mouseleave", () => {
                                                swiper.autoplay.start();
                                            });
                                            document
                                                .querySelector(`.${styles.prev}`)
                                                .addEventListener("click", () => {
                                                    swiper.slidePrev();
                                                });
                                            document.querySelector(`.${styles.next}`).addEventListener("click", () => {
                                                swiper.slideNext();
                                            });
                                        }}
                                        slidesPerView={4}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1,
                                            },
                                            640: {
                                                slidesPerView: 2,
                                            },
                                            768: {
                                                slidesPerView: 3,
                                            },
                                            1024: {
                                                slidesPerView: 4,
                                            },
                                        }}
                                        className={styles.customSwiper}
                                        loop={true}
                                    >
                                        {ProductsData.map((value, index) =>
                                            <SwiperSlide key={index}>
                                                <div className={styles.product_data}>
                                                    <Products key={index} discount={value.discount} ProductImg={value.Img} productLogo={value.productLogo} starRating={value.rating} title={value.title} price={value.price} discountPrice={value.discountprice} time={value.time} id={value.id} />
                                                </div>
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                    <button className={styles.prev}>prev</button>
                                    <button className={styles.next}>next</button>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={styles.product_data}>
                        <Col lg={3}>
                            <div className={styles.categories_filter1}>
                                <div className={styles.cf1_title}>
                                    <h6>categories</h6>
                                    <Button title={"Reset All"} btnStyle="text" />
                                </div>
                                <div className={styles.cf1_color}>
                                    <span>Min: $45.00 </span>
                                    <span>10.9 inch </span>
                                    <span>Color: </span>
                                    <span>128GB </span>
                                </div>
                                <div className={styles.cf1_brands}>
                                    <strong>By Brands</strong>
                                    <input type="text" />
                                </div>
                                <div className={styles.cf1_logoImg}>
                                    <div className={styles.cf1l_Img1}>
                                        <input type="checkbox" />
                                        <span>
                                            <img src={Img1} />
                                            (14)
                                        </span>
                                    </div>
                                    <div className={styles.cf1l_Img1}>
                                        <input type="checkbox" />
                                        <span>
                                            <img src={Img2} />
                                            (14)
                                        </span>
                                    </div>
                                    <div className={styles.cf1l_Img1}>
                                        <input type="checkbox" />
                                        <span>
                                            <img src={Img3} />
                                            (14)
                                        </span>
                                    </div>
                                    <div className={styles.cf1l_Img1}>
                                        <input type="checkbox" />
                                        <span>
                                            <img src={Img4} />
                                            (14)
                                        </span>
                                    </div>
                                    <div className={styles.cf1l_Img1}>
                                        <input type="checkbox" />
                                        <span>
                                            <img src={Img5} />
                                            (14)
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.cf1_price}>
                                    <strong>By Price</strong>

                                    <div className={styles.pc_price}>
                                        <ReactSlider
                                            className={styles.horizontal_slider}
                                            thumbClassName={styles.thumb}
                                            trackClassName={styles.track}
                                            value={priceRange}
                                            min={0}
                                            max={100}
                                            step={1}
                                            onChange={handleSliderChange}
                                        />
                                    </div>
                                    <div className={styles.cf1p_priceLowMix}>
                                        <p className={styles.max_p1}>
                                            <span>$</span>
                                            <input type="number" />
                                        </p>
                                        <p>
                                            <span style={{ fontSize: "20px", fontWeight: "800" }}>
                                                -
                                            </span>
                                        </p>
                                        <p className={styles.max_p2}>
                                            <span>$</span>
                                            <input type="number" />
                                        </p>
                                        <button>GO</button>
                                    </div>
                                </div>
                                <div className={styles.cf1_rating}>
                                    <strong>By Rating</strong>
                                    <div className={styles.cf1rcheck}>
                                        <input type="checkbox" />
                                        <span>★★★☆☆(52)</span>
                                    </div>
                                    <div className={styles.cf1rcheck}>
                                        <input type="checkbox" />
                                        <span>★★★☆☆(24)</span>
                                    </div>
                                    <div className={styles.cf1rcheck}>
                                        <input type="checkbox" />
                                        <span>★★★☆☆(5)</span>
                                    </div>
                                    <div className={styles.cf1rcheck}>
                                        <input type="checkbox" />
                                        <span>★★★☆☆(1)</span>
                                    </div>
                                </div>
                                <div className={styles.cf1_screenSize}>
                                    <strong>By Screen Size</strong>
                                    <span>7” & Under</span>
                                    <span>7.1” - 8.9”</span>
                                    <span>9” - 10.9”</span>
                                    <span>11” & Greater</span>
                                </div>
                                <div className={styles.cf1_colorPiker}>
                                    <strong>By Color</strong>
                                    <span style={{ background: " #A42A2A" }}></span>
                                    <span style={{ background: "#2F557B" }}></span>
                                    <span style={{ background: "#439ABB" }}></span>
                                    <span style={{ background: "#222222" }}></span>
                                    <span style={{ background: " #ffffff" }}></span>
                                    <span style={{ background: " #1aba1a" }}></span>
                                    <span style={{ background: " #696969" }}></span>
                                    <span style={{ background: " #534898" }}></span>
                                </div>
                                <div className={styles.cf1_memory}>
                                    <strong>By Memory</strong>
                                    <div className={styles.cf1m_gb}>
                                        <input type="checkbox" />
                                        <span>12GB (4)</span>
                                    </div>{" "}
                                    <div className={styles.cf1m_gb}>
                                        <input type="checkbox" />
                                        <span>8GB (3)</span>
                                    </div>{" "}
                                    <div className={styles.cf1m_gb}>
                                        <input type="checkbox" />
                                        <span>6GB (12)</span>
                                    </div>{" "}
                                    <div className={styles.cf1m_gb}>
                                        <input type="checkbox" />
                                        <span>4GB (6)</span>
                                    </div>{" "}
                                    <div className={styles.cf1m_gb}>
                                        <input type="checkbox" />
                                        <span>3GB (7)</span>
                                    </div>
                                </div>
                                <div className={styles.cf1_condition}>
                                    <strong>By Conditions</strong>
                                    <div className={styles.cf1c_con}>
                                        <input type="checkbox" />
                                        <span>New (21)</span>
                                    </div>
                                    <div className={styles.cf1c_con}>
                                        <input type="checkbox" />
                                        <span>Like New (2)</span>
                                    </div>
                                    <div className={styles.cf1c_con}>
                                        <input type="checkbox" />
                                        <span>Open Box (38)</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cf_imagebottom}>
                                <img src={Image10} />
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className={styles.product_item}>
                                {ProductsData.slice(0, 24).map((value, index) =>
                                    <Col lg={3} key={index}>
                                        <Products key={index} discount={value.discount} ProductImg={value.Img} productLogo={value.productLogo} starRating={value.rating} title={value.title} price={value.price} discountPrice={value.discountprice} time={value.time} />
                                    </Col>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </Fragment >
    );
}

export default ProductPage;