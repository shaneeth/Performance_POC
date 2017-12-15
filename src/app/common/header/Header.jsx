import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@mui/AppBar';
import Toolbar from '@mui/Toolbar';
import Typography from '@mui/Typography';
import Divider from '@mui/Divider';
import IconButton from '@mui/IconButton';
import { withStyles } from '@mui/styles';
import MenuIcon from '@mIcons/Menu';
import Drawer from '@mui/Drawer';
import MenuList from './MenuList';

const styles = theme => ({
    title: {
        padding: '15px'
    }
});

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isMenuVisible: false
        };
        this.toggleMenus = this.toggleMenus.bind(this);
        this.onDrawerClose = this.onDrawerClose.bind(this);
    }
    toggleMenus() {
        this.setState((prevState) => ({isMenuVisible: !prevState.isMenuVisible}));        
    }
    onDrawerClose() {
        this.setState({
            isMenuVisible: false          
        });            
        
    }
    render() {
        const { title, classes } = this.props;
        const { isMenuVisible } = this.state;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.toggleMenus}>
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit">
                            {title}
                        </Typography>
                    </Toolbar>                    
                    <Drawer open={isMenuVisible} 
                            onRequestClose={this.onDrawerClose}>
                            <Typography className={classes.title} type="headline">
                                Performance POC
                            </Typography>
                            <Divider />
                            <MenuList onMenuClick={this.toggleMenus} />
                    </Drawer>                                        
                </AppBar>                
            </div>
        );
    }
}

export default withStyles(styles)(Header);
