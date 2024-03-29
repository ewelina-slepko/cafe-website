import React from 'react';
import styles from '../styles/artCornerPage.module.css'
import art_corner1 from '../images/art_corner/art_corner1.jpg'
import art_corner2 from '../images/art_corner/art_corner2.jpg'

import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

const ArtCorner = () => (
    <>
        <ScrollIntoViewIfNeeded options={{
            block: 'nearest',
            behavior: 'smooth'
        }}>
            <h3 style={{ fontSize: '2em', textAlign: 'center', padding: '20px', backgroundColor: 'rgb(237, 237, 237)' }}>Art Corner</h3>
            <div className={styles.container}>
                <img src={art_corner1} alt={art_corner1} className={styles.img} />
                <p className={styles.text}>The Art Corner is an artist's paradise.
                    We carry a wide variety of professional and student grade art and craft supplies. The Art Corner's goal
                    is to inspire and nurture everyone's artist within through their motto "Be Creative, Think Young.
                    "We also specialize in teaching the visual arts to kids, teens, adults and seniors.
                    We promote and support young aspiring artist by giving them a platform to show there work.
                        Come to us and create fine arts, painting and drawing. illustrations, portraits, and much more.</p>

                <p className={styles.text}> Our Art Lessons explore a variety of drawing and painting techniques across a range of
                subjects and styles. In each lesson we lead you through an illustrated step by step development of the artwork
                from its initial stages to the finished example. Our Art Lessons explore a variety of drawing and painting techniques across a range of
                subjects and styles. In each lesson we lead you through an illustrated step by step development of the artwork
                        from its initial stages to the finished example.</p>
                <img src={art_corner2} alt={art_corner2} className={styles.img} />

                <div style={{ width: '100%', padding: '50px 0 100px 0', backgroundColor: '#ededed' }} >
                    <ul className={styles.list}>
                        <h2>Course Outcomes</h2>
                        <li>Research best practice, including basic, advanced, and color theory techniques, for watercolor painting in the classroom setting.</li>
                        <li>Explore ideation strategies for developing concept-based lessons and artwork.</li>
                        <li>Create resources and hands-on examples to use directly in the classroom.</li>
                        <li>Develop or extend your watercolor curriculum.</li>
                        <li>Push your personal practice to the next level by working in a visual journal with watercolor.</li>
                        <li>Create original watercolor artwork while experimenting with new techniques.</li>
                    </ul>
                </div>

            </div >
        </ScrollIntoViewIfNeeded>
    </>
);
export default ArtCorner;
