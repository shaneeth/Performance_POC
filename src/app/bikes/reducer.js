import constants from './constants';

const bikes = (state = {
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

export default bikes;