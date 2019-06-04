import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navigation.css';

const list = [
    { name: 'start', path: "/", exact: true },
    { name: 'products', path: "/products" },
    { name: 'contacts', path: "/contacts" },
    { name: 'admin', path: "/admin" }
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
