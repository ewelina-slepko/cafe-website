import React from 'react';
import styles from '../styles/about.module.css'

import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

const About = () => {
    return (
        <ScrollIntoViewIfNeeded options={{
            block: 'nearest',
            behavior: 'smooth',
        }}>
            <div className={styles["container"]}>
                <div className={styles["info_text"]}>
                    <div className={styles["part-one"]} data-aos="fade-right"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine">
                        <h1>Our philosophy</h1>
                        <p >Art is a powerful tool. It help us to see connections and brings more coherent meaning to our world.
                            It has the power to create, inspire, and make a change. Art cafe is our environment to inspire this change.
                        We want everyone to connect. We want you to drink coffee, think, share, travel, love and create art.
                        Art Lovers Hub is more than just a cafe and more than a gallery space.
                    It’s a place where a community is forming to inspire, create and live ART.</p>

                        <p>From Art enthusiasts to artists to passionate Art Lovers our hub is a place to connect through art.
                            Art Lovers hub was Born from the love of art history and the disconnect of today’s society from art
                        and it’s power to incite change. All our products are art, and all our products have a mission, where we inspire the world to live
                            their lives in a way to make the world a better place. We are inviting everyone to join our movement:
                    to fill the world with art and that the art belongs to all of us.</p>
                    </div>

                    <div className={styles["part-two"]} div data-aos="fade-left"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine">
                        <h1>Coffee and drinks</h1>
                        <p>A cup of coffee is an intimate experience. It is a daily ritual that helps kick-start our day. So why do we rush something that
                            can be enjoyed? Why are we willing to sacrifice taste and freshness of something so integral to our day? We strongly believe
                            that each cup of coffee we make is not only the freshest cup you can get but also the best. We take our time freshly grinding
                            your recently roasted coffee. We then brew it perfectly, each cup individually.
                            We have a wide selection of coffee, tea, and cocoa drinks. If you don't see it listed, let us know and we'll do
                            our best to get it or make it. (We're pretty crafty!). Give us a call to double check our drink offerings — we
                    update it pretty regularly to keep up with customer preferences! We use only the finest ingredients.</p>

                        <p>We are proud to be a contributing member of our community, and we recognize that our community is both local AND global.
                            Because of this, we are proud to serve 100% organic, fair-trade, coffees and espressos. What is Fair Trade? It means that
                            the people who grow and pick our coffee are more fairly paid for their efforts and their harvests — more money goes
                            to the farmers, and not to middle-men. The coffee these farmers produce is also organic, meaning it's better for me and
                    you and for the environment.</p>
                    </div>
                </div>
            </div >
        </ScrollIntoViewIfNeeded>
    );
}

export default About;
