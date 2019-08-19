import React from 'react'
import styles from '../styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <>
            <div>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.section}>
                            <h3>Contact us!</h3>
                            <p>Phone number: +775068394</p>
                            <p>email: artscorner@gmail.com</p>
                            <p>Art's Corner Cafe, 4856 Lakeland Park Drive Street, Gainesville, Georgia (GA), 30501</p>
                        </div>
                        <div className={styles.section}>
                            <h3>Hours</h3>
                            <p>Monday - Sunday:</p> <p>8am-10pm</p>
                        </div>
                        <div className={styles.links}>
                            <h3>Terms and conditions</h3>
                            <h3>Privacy policy</h3>
                            <h3>Wifi term of use</h3>
                        </div>
                        <div className={styles.section}>
                            <h3>Social Media</h3>
                            <div>
                                <FontAwesomeIcon style={iconStyle} icon={['fab', 'instagram']} size="2x" />
                                <FontAwesomeIcon style={iconStyle} icon={['fab', 'facebook']} size="2x" />
                                <FontAwesomeIcon style={iconStyle} icon={['fab', 'twitter']} size="2x" />
                            </div>
                        </div>
                    </div>


                </div>
                <div className={styles.copyright}>
                    copyright© artscorner.com
            </div>
            </div>
        </>
    );
}

const iconStyle = {
    padding: "6px",
    cursor: "pointer"
}

export default Footer;
