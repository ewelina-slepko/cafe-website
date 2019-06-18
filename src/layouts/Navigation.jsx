import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navigation.css';

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
            <h1 data-aos="flip-down"
                data-aos-offset="500"
            >
                Art's Corner Café</h1>
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
