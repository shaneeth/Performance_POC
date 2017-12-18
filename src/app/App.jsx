import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '@common/nav';
import Dashboard from './dashboard';
import Places from './places';
import Donuts from './donuts';
import Bikes from './bikes'
import './styles.less';


class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="content">
                    <Route exact={true} path="/" component={Dashboard} />
                    <Route path="/places" component={Places} />
                    <Route path="/donuts" component={Donuts} />
                    <Route path="/bikes" component={Bikes} />
                </div>                
            </div>        
        )
    }
}

export default App;