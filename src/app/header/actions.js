import CreateAction from '@utility/CreateAction';
import constants from './constants';

export const actionToggleMenus = (flag) => {
    return CreateAction(constants.TOGGLE_MENU, {
        flag
    });
}

export const actionChangeTitle = (title) => {
    return CreateAction(constants.CHANGE_TITLE, {
        title
    });
}
