
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Header from './header.jsx';
import Footer from './footer.jsx';

import Presets from './presets.jsx'
import RoutesComponent from './Routes.jsx';



import React, { Component } from 'react'

export default class Layout extends Component {
    render() {
        return (
            <div>

                <BrowserRouter>
                    <React.Fragment>
                        <Header />
                        <div id="container">
                            <RoutesComponent />

                            <Footer />
                        </div>
                    </React.Fragment>
                </BrowserRouter>
            </div>
        )
    }
}

