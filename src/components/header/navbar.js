import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MenuItem from "../menuItems";
import Select from "../select";
import styles from "./style.module.css";

const Navbar = () => {
    const MenuItems = [
        {
            id: 1,
            title: "Home",
            path: "/home",
            children: [
                { id: 1, title: "Home 1", path: "/home1" },
                { id: 2, title: "Home 2", path: "/home2" },
            ]
        },
        {
            id: 2,
            title: "Shop",
            path: "/shop",
            children: [
                { id: 1, title: "Shop 1", path: "/shop1" },
                { id: 2, title: "Shop 2", path: "/shop2" },
            ],
        },
        {
            id: 3,
            title: "Fruits & Vegetables",
            path: "/fruits",
        },
        {
            id: 4,
            title: "Beverages",
            path: "/beverages",
        },
        {
            id: 5,
            title: "Blog",
            path: "/blog",
        },
        {
            id: 6,
            title: "Contact",
            path: "/contact",
        },
    ];

    const ProductsOption = [
        {
            id: 1,
            name: "latestproducts",
            title: "Latest Products",
        },
        {
            id: 2,
            name: "oldestproducts",
            title: "Oldest Products",
        },
        {
            id: 3,
            name: "trandingproducts",
            title: "Tranding Products",
        },
        {
            id: 4,
            name: "popularproducts",
            title: "Popular Products",
        },
    ]

    const SalesOption = [
        {
            id: 1,
            name: "almost_finished",
            title: "Almost Finished",
        },
        {
            id: 2,
            name: "one_month",
            title: "One Month",
        },
        {
            id: 3,
            name: "one_week",
            title: "One Week",
        },
    ]

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleProducts = (products) => {
        console.log('products', products)
    }

    const handleSale = (sale) => {
        console.log('sale', sale)
    }

    return (
        <div className={styles.header_navbar}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={12}>
                        <div className={styles.hn_wrap}>
                            <div
                                className={`${styles.menubar} ${menuOpen ? styles.menuOpen : ""}`}
                            >
                                {MenuItems.map((item) => (
                                    <MenuItem key={item.id} item={item} />
                                ))}
                            </div>
                            <div className={styles.nav_Select}>
                                <Select options={ProductsOption} keyName={"title"} defaultValue={ProductsOption[2]} placeholder={"Products"} onSelect={handleProducts} customCss={styles.ns_first} />
                                <Select options={SalesOption} keyName={"title"} defaultValue={SalesOption[0]} placeholder={"Sale"} onSelect={handleSale} customCss={styles.ns_last} sale={true} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Navbar;
