import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from '../pages/About';
import ArtCornerPage from '../pages/ArtCornerPage';
import Gallery from '../pages/Gallery';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';


const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/about" component={About} />
                <Route path="/artcorner" component={ArtCornerPage} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/contact" component={ContactPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;
