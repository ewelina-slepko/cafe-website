import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navigation.css';
import { stack as Menu } from 'react-burger-menu'

const list = [
    { name: 'About', path: "/about", exact: true },
    { name: 'Art corner', path: "/artcorner" },
    { name: 'Gallery', path: "/gallery" },
    { name: 'Contact', path: "/contact" },
]

class Navigation extends React.Component {
    state = {
        menuOpen: false
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu = () => {
        this.setState({ menuOpen: false })
    }

    render() {
        const menu = list.map(item => (
            <NavLink onClick={this.closeMenu} key={item.name} className="menu-item" to={item.path} exact={item.exact} ><li>{item.name}</li></NavLink>
        ));
        return (
            <>
                <h1 data-aos="flip-down"
                    data-aos-offset="500"
                >
                    Art's Corner Café</h1>
                <nav className="navigation">
                    {window.innerWidth < 425 ? (
                        <Menu styles={styles}
                            pageWrapId={"page-wrap"} isOpen={this.state.menuOpen}
                            onStateChange={(state) => this.handleStateChange(state)}
                        >
                            <main id="page-wrap">
                                <ul>
                                    {menu}
                                </ul>
                            </main>
                        </Menu>
                    ) : (
                            <main>
                                <ul>
                                    {menu}
                                </ul>
                            </main>
                        )
                    }
                </nav>
            </>
        );
    }

}
const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '16px',
        top: '16px'
    },
    bmBurgerBars: {
        background: '#b5b5b5',
        height: '15%',
        borderRadius: '10px'
    },

    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#878585'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        width: '80%',
    },
    bmMenu: {
        background: '#ededed',
        padding: '2.0em 0.5em 0',
        fontSize: '1.15em',
        opacity: '.95'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.4em'
    },
    bmItem: {
        display: 'inline-block'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    },
    bmItem: {
        outline: 'none'
    },
    menuItem: {
        textDecoration: 'none'
    },
}

export default Navigation;
