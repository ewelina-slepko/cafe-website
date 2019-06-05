import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage';
import Blog from '../pages/Blog';
import CoffeePage from '../pages/CoffeePage';
import ArtCornerPage from '../pages/ArtCornerPage';
import Gallery from '../pages/Gallery';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';

const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/blog" component={Blog} />
                <Route path="/coffee" component={CoffeePage} />
                <Route path="/artcorner" component={ArtCornerPage} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/contact" component={ContactPage} />
                <Route component={ErrorPage} />
            </Switch>

        </>
    );
}

export default Page;
