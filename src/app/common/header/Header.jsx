import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import MenuList from './MenuList';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isMenuVisible: false
        };
        this.toggleMenus = this.toggleMenus.bind(this);
        this.onDrawerChange = this.onDrawerChange.bind(this);
    }
    toggleMenus() {
        this.setState((prevState) => ({isMenuVisible: !prevState.isMenuVisible}));        
    }
    onDrawerChange(isOpen, type) {
        if(!isOpen) {
            this.setState({
                isMenuVisible: false
            });            
        }
    }
    render() {
        const { title } = this.props;
        const { isMenuVisible } = this.state;
        return (
            <div>
                <AppBar position="static" title={title} onLeftIconButtonClick={this.toggleMenus}>
                    <Drawer open={isMenuVisible} 
                            onRequestChange={this.onDrawerChange} 
                            docked={false}>
                            <div onClick={this.toggleMenus}>
                                <MenuList />
                            </div>
                    </Drawer>                                        
                </AppBar>                
            </div>
        );
    }
}

export default Header;
