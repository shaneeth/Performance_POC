import React, { Component } from 'react';
import List, { ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';
import constants from './constants';

const menuList = [
    {
        name: 'Dashboard',
        link: '/'
    }, {
        name: constants.MENU_MAP.css,
        link: '/css'
    }, {
        name: constants.MENU_MAP.less,
        link: '/less'
    }, {
        name: constants.MENU_MAP.sass,
        link: '/sass'
    }, {
        name: constants.MENU_MAP.assets,
        link: '/assets'
    }];

class MenuList extends Component {
    render() {
        return (
            <div>
                <List>
                    {
                        menuList.map((menu) => (
                            <Link key={menu.name}
                                  to={menu.link}>
                                <ListItem >
                                    {menu.name}
                                </ListItem>
                            </Link>
                        ))
                    }
                </List>
            </div>
        )
    }
}

export default MenuList;