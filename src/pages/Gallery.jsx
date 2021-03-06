import React from 'react';
import styles from '../styles/gallery.module.css'

import gallery1 from '../images/gallery/gallery1.jpg'
import gallery2 from '../images/gallery/gallery2.jpg'
import gallery3 from '../images/gallery/gallery3.jpg'
import gallery4 from '../images/gallery/gallery4.jpg'
import gallery5 from '../images/gallery/gallery5.jpg'
import gallery6 from '../images/gallery/gallery6.jpg'
import gallery7 from '../images/gallery/gallery7.jpg'
import gallery8 from '../images/gallery/gallery8.jpg'
import gallery9 from '../images/gallery/gallery9.jpg'
import gallery10 from '../images/gallery/gallery10.jpg'
import gallery11 from '../images/gallery/gallery11.jpg'
import gallery12 from '../images/gallery/gallery12.jpg'
import gallery13 from '../images/gallery/gallery13.jpg'
import gallery14 from '../images/gallery/gallery14.jpg'
import gallery15 from '../images/gallery/gallery15.jpg'
import gallery16 from '../images/gallery/gallery16.jpg'
import gallery17 from '../images/gallery/gallery17.jpg'
import gallery18 from '../images/gallery/gallery18.jpg'


import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

const Gallery = () => {
    const fullGallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7,
        gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16, gallery17, gallery18].map(img => {
            return <div><img
                src={img}
                alt={img}
                className={styles.imgResponsive}
            /></div>
        });
    return (
        <>
            <ScrollIntoViewIfNeeded options={{
                block: 'nearest',
                behavior: 'smooth'
            }}>
                <h3 style={{ fontSize: '2em', textAlign: 'center', padding: '20px', backgroundColor: 'rgb(237, 237, 237)' }}>Gallery</h3>
                <div className={styles.container}>
                    {fullGallery}
                </div>
            </ScrollIntoViewIfNeeded>
        </>
    );
}

export default Gallery;

