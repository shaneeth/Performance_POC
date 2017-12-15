import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '@common/header';
import createMenuMaps from '@utility/createMenuMaps';
import constants from './constants';

class Nav extends Component {
    constructor() {
        super();
        this.menuMaps = createMenuMaps(constants.MENUS);
        this.state = {
            headerTitle: ''
        };
    }
    findHeaderTitle(path) {
        if(!path) {
            return;
        }
        if (path.length > 1 && /\/$/.test(path)) {
            path = path.slice(0, -1)
        }        
        let menu = this.menuMaps[path];
        if(menu) {
            this.setState({
                headerTitle: menu.name
            });                    
        } else {
            this.setState({
                headerTitle: ''
            });
        }
    }
    findCurrentLocation({ router }) {
        if(!(router && router.route && router.route.location)) {
            return;
        }                
        this.findHeaderTitle(router.route.location.pathname);        
    }
    componentWillMount() {
        this.findCurrentLocation(this.context)
    }
    componentWillReceiveProps(newProps, context) {
        this.findCurrentLocation(context)        
    }
    render() {
        return (<Header title={this.state.headerTitle} />);
    }
}

Nav.contextTypes = {
    router: PropTypes.object
};



export default Nav;