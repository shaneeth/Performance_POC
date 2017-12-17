import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '@common/nav';
import Dashboard from './dashboard';
import Examples from './examples';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './styles.less';
import './styles.sass';

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="content">
                    <Route exact={true} path="/" component={Dashboard} />
                    <Route path="/:type" component={Examples} />
                </div>                
            </div>        
        )
    }
}

export default App;