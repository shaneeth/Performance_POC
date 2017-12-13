import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Drawer from 'material-ui/Drawer';
import { actionToggleMenus } from './actions';
import MenuList from './MenuList';

class Header extends Component {
    constructor() {
        super();
        this.toggleMenus = this.toggleMenus.bind(this);
        this.onDrawerChange = this.onDrawerChange.bind(this);
    }
    toggleMenus() {
        this.props.toggleMenus();
    }
    onDrawerChange(isOpen, type) {
        if(!isOpen) {
            this.props.toggleMenus(false);
        }
    }
    render() {
        const { header } = this.props;
        return (
            <div>
                <AppBar position="static" title={header.title} onLeftIconButtonClick={this.toggleMenus}>
                    <Drawer open={header.isMenuVisible} 
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

const mapStateToProps = state => {
    const { header } = state;
    return {
        header
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleMenus: (flag) => dispatch(actionToggleMenus(flag))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);