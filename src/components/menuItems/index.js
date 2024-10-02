import React, { useState } from 'react';
import DropDown from '../../icons/dropdown';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

const MenuItems = ({ item }) => {
    const hasChildren = item?.children?.length > 0;
    const [toggleSubMenu, setToggleSubMenu] = useState(false);
    const handleToggleMenu = () => {
        setToggleSubMenu(!toggleSubMenu);
    };

    return (
        <div className={`${styles.menuItem} ${hasChildren ? styles.menuItemWithChildren : ""}`}>
            <NavLink to={item.path} className={hasChildren ? styles.menuItemWithChildren : ""}>
                {item.title}
            </NavLink>
            {hasChildren && <button className={styles.dropdown} onClick={handleToggleMenu}><DropDown /></button>}
            {hasChildren && (
                <div className={`${styles.menuItem_children} ${toggleSubMenu ? styles.menuSubMenu : ""}`}>
                    {item.children.map((child, index) => (
                        <div key={index} className={styles.mic_item}>
                            <NavLink to={child.path}>{child.title}</NavLink>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MenuItems;