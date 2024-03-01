import React from 'react';
import {HorizontalNavBarProps} from "../../types";



const HorizontalNavBar: React.FC<HorizontalNavBarProps> = ({ menuItems }) => {
    return (
        <nav className="horizontal-nav">
            <ul className="horizontal-nav-menu-item-list">
                {menuItems.map((menuItem, index) => (
                    <li key={index}>
                        <a href={menuItem.url} className="menu-item">{menuItem.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default HorizontalNavBar;
