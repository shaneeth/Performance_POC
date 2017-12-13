import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import Dashboard from './dashboard';
import Examples from './examples';
import './styles.css';
import './styles.less';
import './styles.sass';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Route exact={true} path="/" component={Dashboard} />
                <Route path="/:type" component={Examples} />
            </div>        
        )
    }
}

export default App;