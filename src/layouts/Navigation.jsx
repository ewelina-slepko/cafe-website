import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navigation.css';
import { slide as Menu } from 'react-burger-menu'

const list = [
    { name: 'about', path: "/about", exact: true },
    { name: 'art corner', path: "/artcorner" },
    { name: 'gallery', path: "/gallery" },
    { name: 'contact', path: "/contact" },
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

                    {window.innerWidth < 992 ? (
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
        background: '#cecece',
    },

    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        width: '80%'
    },
    bmMenu: {
        background: '#ededed',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
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
