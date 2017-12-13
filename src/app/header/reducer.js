import constants from './constants';

const header = (state = {
    title: 'Dashboard',
    isMenuVisible: false
}, action) => {
    switch(action.type) {
        case constants.TOGGLE_MENU:
            return {
                ...state,
                isMenuVisible: action.flag === undefined ? !state.isMenuVisible : action.flag
            }
        case constants.CHANGE_TITLE:
            return {
                ...state,
                title: action.title
            }
        default:
            return state
    }
}

export default header;