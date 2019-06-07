import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navigation.css';

const list = [
    { name: 'start', path: "/", exact: true },
    { name: 'art corner', path: "/artcorner" },
    { name: 'gallery', path: "/gallery" },
    { name: 'contact', path: "/contact" },
]


const Navigation = () => {
    const menu = list.map(item => (
        <NavLink key={item.name} to={item.path} exact={item.exact}>{item.name}<br /></NavLink>
    ));
    return (
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav >

    );
}

export default Navigation;
