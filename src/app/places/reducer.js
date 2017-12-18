import constants from './constants';

const places = (state = {
    list: [],
    isLoading: false
}, action) => {
    switch(action.type) {
        case constants.REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case constants.RECEIVE:
            return {
                ...state,
                isLoading: false,
                list: action.data || []
            }
    }
    return state;
}

export default places;