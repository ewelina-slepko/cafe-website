import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import ArtCornerPage from '../pages/ArtCornerPage';
import Gallery from '../pages/Gallery';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';

import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';

const Page = (props) => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/artcorner" component={ArtCornerPage} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/contact" component={ContactPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;
