import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemIcon, ListItemText } from '@mui/List';
import { withStyles } from '@mui/styles';
import constants from '../nav/constants';

const menuList = constants.MENUS;
const styles = theme => ({
    menuWrap: {
        minWidth: '300px',
        background: theme.palette.background.paper
    }
});

class MenuList extends PureComponent {
    constructor() {
        super();
        this.onMenuClick = this.onMenuClick.bind(this);
    }
    onMenuClick(...args) {
        const { onMenuClick } = this.props;
        if(onMenuClick) {
            onMenuClick(...args);
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.menuWrap}>
                <List>
                    {
                        menuList.map((menu) => (
                            <Link key={menu.name}
                                  to={menu.link}>
                                <ListItem button onClick={this.onMenuClick}>
                                    <ListItemIcon>
                                        <menu.icon />
                                    </ListItemIcon>
                                    <ListItemText primary={menu.name}></ListItemText>
                                </ListItem>
                            </Link>
                        ))
                    }
                </List>
            </div>
        )
    }
}

MenuList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuList);