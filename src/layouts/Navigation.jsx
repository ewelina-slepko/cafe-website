import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/navigation.module.css';
import '../styles/trial.css';

const list = [
    { name: 'about', path: "/about", exact: true },
    { name: 'art corner', path: "/artcorner" },
    { name: 'gallery', path: "/gallery" },
    { name: 'contact', path: "/contact" },
]

const Navigation = () => {
    const menu = list.map(item => (
        <NavLink key={item.name} to={item.path} exact={item.exact}><li>{item.name}</li></NavLink>
    ));
    return (
        <>
            <nav className="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        {menu}
                    </ul>
                </div>
            </nav >
        </>
    );
}

export default Navigation;
