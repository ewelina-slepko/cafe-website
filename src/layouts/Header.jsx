import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from '../styles/header.module.css'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'

import uuid from "uuid/v1";

const images = [image1, image2, image3].map(image => ({ id: uuid(), src: image }))

class Header extends Component {
    state = {
        index: 0,
        selected: images[0]
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => {
                const newIndex =
                    prevState.index < images.length - 1 ? prevState.index + 1 : 0;
                return {
                    index: newIndex,
                    selected: images[newIndex]
                };
            });
        }, 4000)
    };

    render = () => (
        <>
            <div className={styles.container}>
                <TransitionGroup>
                    <CSSTransition
                        key={this.state.selected.id}
                        timeout={1000}
                        classNames="messageout"
                    >
                        <img src={this.state.selected.src} />
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </>
    );
}

export default Header;

