import constants from './constants';

const defaultState = {
    list: [],
    isLoading: false,
    maxPages: 10,
    countPerPage: 11,
    currentPage: 1
}

const bikes = (state = {...defaultState}, action) => {
    let page;
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
        case constants.NEXT_PAGE:
            page = state.currentPage;
            page++;
            if(page > state.maxPages) {
                page = 1
            }
            return {
                ...state,
                currentPage: page
            }
        case constants.PREVIOUS_PAGE:
            page = state.currentPage;
            page--;
            if(page === 0) {
                page = state.maxPages
            }
            return {
                ...state,
                currentPage: page
            }
        case constants.RESET:
            return {
                ...defaultState,
                list: []
            }
    }
    return state;
}

export default bikes;