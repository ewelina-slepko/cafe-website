import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import CookiesAndCupcakes from '../pages/CookiesAndCupcakes';
import ArtCorner from '../pages/ArtCorner';
import Contact from '../pages/Contact';
import Coffee from '../pages/Coffee';

const Page = () => {
    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path="/coffee" exact component={Coffee} />
            <Route path="/cookies&cupcakes" exact component={CookiesAndCupcakes} />
            <Route path="/artcorner" exact component={ArtCorner} />
            <Route path="/contact" exact component={Contact} />
        </>
    );
}

export default Page;
