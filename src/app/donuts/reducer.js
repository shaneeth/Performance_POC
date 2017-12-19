import constants from './constants';

const defaultState = {
    list: [],
    isLoading: false,
    maxPages: 10,
    nextPage: 1,
    countPerPage: 18,
    loadedCount: 0
}

const donuts = (state = {...defaultState}, action) => {
    switch(action.type) {
        case constants.REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case constants.RECEIVE:
            let list = state.list;
            list.push.apply(list, action.data);
            return {
                ...state,
                isLoading: false,
                list: list,
                loadedCount: list.length
                
            }
        case constants.NEXT_PAGE:
            return {
                ...state,
                nextPage: state.nextPage + 1
            }
        case constants.RESET:
            return {
                ...defaultState,
                list: []
            }
    }
    return state;
}

export default donuts;