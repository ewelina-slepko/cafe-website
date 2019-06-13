import React from 'react';
import '../styles/artCornerPage.css'
import art_corner1 from '../images/art_corner/art_corner1.jpg'
import art_corner2 from '../images/art_corner/art_corner2.jpg'
import art_corner3 from '../images/art_corner/art_corner3.jpg'
import art_corner4 from '../images/art_corner/art_corner4.jpg'

import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

const ArtCorner = () => {
    return (
        <>
            <ScrollIntoViewIfNeeded options={{
                block: 'nearest',
                behavior: 'smooth'
            }}>
                <div className="artcorner_container">

                    <img src={art_corner1} alt={art_corner1} className="section-responsive" />
                    <p className="section-responsive">The Art Corner is an artist's paradise.
                        We carry a wide variety of professional and student grade art and craft supplies. The Art Corner's goal
                is to inspire and nurture everyone's artist within through their motto "Be Creative, Think Young."</p>

                    <p className="section-responsive"> We also specialize in teaching the visual arts to kids, teens, adults and seniors.</p>
                    <img src={art_corner2} alt={art_corner2} className="section-responsive" />

                    <img src={art_corner3} alt={art_corner3} className="section-responsive" />
                    <p className="section-responsive">We promote and support young aspiring artist by giving them a platform to show there work.</p>

                    <p className="section-responsive">Come to us and create fine arts, painting and drawing. illustrations, portraits, and much more.</p>
                    <img src={art_corner4} alt={art_corner4} className="section-responsive" />
                </div >
            </ScrollIntoViewIfNeeded>
        </>
    );
}

export default ArtCorner;
