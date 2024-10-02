import React, { Fragment } from 'react';
import styles from './style.module.css';
import Header from '../../components/header';
import HeroSection from '../../components/heroSection';
import Category from '../../components/category';
import Button from '../../components/button';
import ArrowIcon from '../../icons/arrow';
import { Col, Container, Row } from 'react-bootstrap';
import Image1 from '../../assets/images/category1.png';
import Image2 from '../../assets/images/category2.png';
import Image3 from '../../assets/images/category3.png';
import Image4 from '../../assets/images/category4.png';
import Image5 from '../../assets/images/category5.png';
import Image6 from '../../assets/images/category6.png';
import Image7 from '../../assets/images/category7.png';
import Image8 from '../../assets/images/category8.png';
import Image9 from '../../assets/images/category9.png';
import BannerDiscount from '../../components/bannerDisount';
import Products from '../../components/products';
import ProductImg1 from '../../assets/images/product2.png';
import ProductImg2 from '../../assets/images/product3.png';
import ProductImg3 from '../../assets/images/product4.png';
import ProductImg4 from '../../assets/images/product5.png';
import ProductImg5 from '../../assets/images/product1.png';
import ProductImg6 from '../../assets/images/product6.png';
import ProductImg7 from '../../assets/images/product7.png';
import ProductImg8 from '../../assets/images/product8.png';
import ProductImg9 from '../../assets/images/product9.png';
import ProductImg10 from '../../assets/images/product10.png';
import ProductImg11 from '../../assets/images/product11.png';
import ProductImg12 from '../../assets/images/product12.png';
import ProductImg13 from '../../assets/images/product13.png';
import Banner from '../../components/banner';
import Banner1 from '../../assets/images/banner1.png';
import Banner2 from '../../assets/images/banner2.png';
import Banner3 from '../../assets/images/banner3.png';
import NewArrivals from '../../components/newArrials';
import BannerImg1 from '../../assets/images/bannerimg1.png';
import BannerImg2 from '../../assets/images/bannerimg2.png';
import FeatureProduct from '../../components/featureProduct';
import BanImg1 from '../../assets/images/ban1.png';
import BanImg2 from '../../assets/images/ban2.png';
import BanImg3 from '../../assets/images/ban3.png';
import Cards from '../../components/cards';
import Footer from '../../components/footer';
import ProductDeal from '../../components/productDeal';
import Deals from '../../components/dealsProduct';
import Deal1 from '../../assets/images/product2.png';
import Deal2 from '../../assets/images/product12.png';
import Section from '../../components/section';
import ProductData from '../../data/product.json';
import CategoryData from '../../data/category.json';
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


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

const ProductsItem = [
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
        discount: "59 %",
        Img: ProductImg5,
        productLogo: true,
        rating: "3",
        title: "Cantaloupe Melon Fresh Organic Cut",
        price: "$1.25",
        discountprice: "$2.98",
        time: "16",
    },
    {
        id: 6,
        discount: "18 %",
        Img: ProductImg6,
        productLogo: false,
        rating: "3",
        title: "Angel Soft Toilet Paper, 9 Mega Rolls",
        price: "$14.12",
        discountprice: "$17.12",
        time: "32",
    },
]

const BannerItem = [
    {
        id: 1,
        Bgimg: Banner1,
        tag: "Only This Week",
        title: "We provide you the best quality products",
        description: "Only this week. Don’t miss...",
    },
    {
        id: 2,
        Bgimg: Banner2,
        tag: "Only This Week",
        title: "We make your grocery shopping more exciting",
        description: "Feed your family the best",
    },
    {
        id: 3,
        Bgimg: Banner3,
        tag: "Only This Week",
        title: "The one supermarket that saves your money",
        description: "Eat one every day",
    },
]

const NewArrivalItems = [
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
        Img: ProductImg5,
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
        Img: ProductImg7,
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
        Img: ProductImg8,
        productLogo: false,
        rating: "3",
        title: "California Pizza Kitchen Margherita, Crispy Thin Crus…",
        price: "$11.77",
        discountprice: "$14.77",
        time: "19",
    },
    {
        id: 5,
        discount: "59 %",
        Img: ProductImg9,
        productLogo: true,
        rating: "3",
        title: "Cantaloupe Melon Fresh Organic Cut",
        price: "$1.25",
        discountprice: "$2.98",
        time: "16",
    },
]

const BannerItem2 = [
    {
        id: 1,
        Bgimg: BannerImg1,
        tag: "Only This Week",
        title: "Provides you the quality that’s you expected",
        description: "Feed your family the best",
    },
    {
        id: 2,
        Bgimg: BannerImg2,
        tag: "Only This Week",
        title: "Grocery store at the center of the city",
        description: "Only this week. Don’t miss...",
    },
]

const FeatureItems = [
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
        Img: ProductImg3,
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
        Img: ProductImg10,
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
        Img: ProductImg11,
        productLogo: false,
        rating: "3",
        title: "California Pizza Kitchen Margherita, Crispy Thin Crus…",
        price: "$11.77",
        discountprice: "$14.77",
        time: "19",
    },
]

const BannerItem3 = [
    {
        id: 1,
        Bgimg: BanImg1,
        tag: "Only This Week",
        title: "We are here for shopping lovers",
        description: "Eat one every day",
    },
    {
        id: 2,
        Bgimg: BanImg2,
        tag: "Only This Week",
        title: "Get pocket-friendly products with us",
        description: "Only this week. Don’t miss...",
    },
    {
        id: 3,
        Bgimg: BanImg3,
        tag: "Only This Week",
        title: "Grocery store at the center of the city",
        description: "Feed your family the best",
    },
]

const DealsData = [
    {
        id: 1,
        percent: "75%",
        dealImg: Deal1,
        title: "100 Percent Apple Juice – 64 fl oz Bottle",
        num: "3",
        price: "$0.50",
        delprice: "$1.99",
        time1: "84",
        time2: "84",
        time3: "84",
        time4: "84",
    },
]
const DealsData2 = [
    {
        id: 1,
        percent: "75%",
        dealImg: Deal2,
        title: "100 Percent Apple Juice – 64 fl oz Bottle",
        num: "3",
        price: "$0.50",
        delprice: "$1.99",
        time1: "84",
        time2: "84",
        time3: "84",
        time4: "84",
    },
]
const Home = () => {



    return (
        <Fragment>
            <HeroSection />
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
            <BannerDiscount />
            <Container>
                <Row>
                    <div className={styles.category_head}>
                        <div className={styles.category_wrap}>
                            <h4>NEW PRODUCTS</h4>
                            <span>Some of the new products arriving this weeks</span>
                            <Button text={"View All"} arrow={<ArrowIcon />} customCss={styles.cat_btn} />
                        </div>
                    </div>
                </Row>
                <Row>
                    {ProductData.slice(0, 6).map((value, index) =>
                        <Col lg={2} key={index}>
                            <Products discount={value.discount} ProductImg={value.Img} productLogo={value.productLogo} starRating={value.rating} title={value.title} price={value.price} discountPrice={value.discountprice} time={value.time} isAvailable={true} id={value.id} />
                        </Col>
                    )}
                </Row>
            </Container>
            <Container>
                <Row>
                    {BannerItem.map((value, index) =>
                        <Col lg={4} key={index}>
                            <Banner BgImg={value.Bgimg} tag={value.tag} title={value.title} description={value.description} />
                        </Col>
                    )}
                </Row>
            </Container>
            <Container>
                <Row>
                    <div className={styles.category_head}>
                        <div className={styles.category_wrap}>
                            <h4>New Arrivals</h4>
                            <span>Do not miss the current offers until the end of month.</span>
                            <Button text={"View All"} arrow={<ArrowIcon />} customCss={styles.cat_btn} />
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col lg={3}>
                        <NewArrivals />
                    </Col>
                    <Col lg={9}>
                        <div className={styles.arrival_wrraper}>
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
                                {ProductData.slice(0, 5).map((value, index) =>
                                    <SwiperSlide>
                                        <Products key={index} discount={value.discount} ProductImg={value.Img} productLogo={value.productLogo} starRating={value.rating} title={value.title} price={value.price} discountPrice={value.discountprice} time={value.time} inStock={true} id={value.id} />
                                    </SwiperSlide>
                                )}
                            </Swiper>

                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {BannerItem2.map((value, index) =>
                        <Col lg={6} key={index}>
                            <Banner BgImg={value.Bgimg} tag={value.tag} title={value.title} description={value.description} isBig={true} />
                        </Col>
                    )}
                </Row>
            </Container>
            <Container>
                <Row>
                    <div className={styles.category_head}>
                        <div className={styles.category_wrap}>
                            <h4>Featured Products</h4>
                            <span>Do not miss the current offers until the end of month.</span>
                            <Button text={"View All"} arrow={<ArrowIcon />} customCss={styles.cat_btn} />
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col lg={3}>
                        <FeatureProduct />
                    </Col>
                    <Col lg={9}>
                        <div className={styles.feature_wrraper}>
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
                                {ProductData.slice(0, 5).map((value, index) =>
                                    <SwiperSlide>
                                        <Products key={index} discount={value.discount} ProductImg={value.Img} productLogo={value.productLogo} starRating={value.rating} title={value.title} price={value.price} discountPrice={value.discountprice} time={value.time} id={value.id} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    {BannerItem3.map((value, index) =>
                        <Col lg={4} key={index}>
                            <Banner BgImg={value.Bgimg} tag={value.tag} title={value.title} description={value.description} />
                        </Col>
                    )}
                </Row>
            </Container>
            {/* <Container>
                <Row>
                    <div className={styles.category_head}>
                        <div className={styles.category_wrap}>
                            <h4>Deals Of The Day</h4>
                            <span>The freshest greengrocer products are waiting for you</span>
                            <Button text={"View All"} arrow={<ArrowIcon />} customCss={styles.cat_btn} />
                        </div>
                    </div>
                </Row>
            </Container>
            <Section pt={"30"} pb={"30"}>
                <Container>
                    <Row>
                        <div className={styles.dealdata}>
                            <div className={styles.dealdata1}>
                                {DealsData.map((value, index) =>
                                    <Col lg={4} key={index}>
                                        <Deals percent={value.percent} DealsImg={value.dealImg} productLogo={true} title={value.title} num={value.num} price={value.price} delPrice={value.delprice} time1={value.time1} time2={value.time2} time3={value.time3} time4={value.time4} />
                                    </Col>
                                )}
                            </div>
                            <div className={styles.dealdata2}>
                                {DealsData2.map((value, index) =>
                                    <Col lg={4} key={index}>
                                        <Deals percent={value.percent} DealsImg={value.dealImg} productLogo={true} title={value.title} num={value.num} price={value.price} delPrice={value.delprice} time1={value.time1} time2={value.time2} time3={value.time3} time4={value.time4} />
                                    </Col>
                                )}
                            </div>
                        </div>
                    </Row>
                </Container>
            </Section> */}
            <Cards />
        </Fragment>
    );
}

export default Home;