import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home'
import Landing from '../components/Landing';
import Contact from '../components/Contact';
import About from '../components/About';
import Blog from '../components/Blog';
import Portfolio from '../components/Portfolio';

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/">
                        <Landing />
                    </Route>
                </Switch>
            </Router>
        </>

    )
}

export default Routes;