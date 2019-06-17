import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/navigation.module.css';

const list = [
    { name: 'about', path: "/about", exact: true },
    { name: 'art corner', path: "/artcorner" },
    { name: 'gallery', path: "/gallery" },
    { name: 'contact', path: "/contact" },
]

const Navigation = () => {

    const menu = list.map(item => (
        <NavLink key={item.name} to={item.path} exact={item.exact}>{item.name}</NavLink>
    ));
    return (
        <nav className={styles["main"]} >
            {menu}
        </nav >
    );
}

export default Navigation;
