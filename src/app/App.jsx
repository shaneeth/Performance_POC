import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Bundle from '@utility/Bundle';
import Nav from '@common/nav';
import Dashboard from './dashboard';
import Places from '@lazy!./places';
import Donuts from '@lazy!./donuts';
import Bikes from '@lazy!./bikes'
import './styles.less';


class App extends Component {
    renderComponent(component) {
        return () => (
            <Bundle load={component}>
                {Element => <Element />}
            </Bundle>
        );
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="content">
                    <Route exact={true} path="/" component={Dashboard} />
                    <Route path="/places" render={this.renderComponent(Places)} />
                    <Route path="/donuts" render={this.renderComponent(Donuts)} />
                    <Route path="/bikes" render={this.renderComponent(Bikes)} />
                </div>                
            </div>        
        )
    }
}

export default App;