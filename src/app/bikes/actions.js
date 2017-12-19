import createAction from '@utility/createAction';
import fetch from '@utility/fetch';
import constants from './constants';


const requestBikes = () => {
    return createAction(constants.REQUEST);
}

const receiveBikes = (data) => {
    return createAction(constants.RECEIVE, {
        data
    });
}

export const resetBikes = () => {
    return createAction(constants.RESET)
}

export const nextPage = () => {
    return createAction(constants.NEXT_PAGE)
}

export const previousPage = () => {
    return createAction(constants.PREVIOUS_PAGE)
}

export const fetchBikes = (page) => {
    return dispatch => {
        dispatch(requestBikes());
        return fetch(`assets/json/bikes/${page}.json`)
                .then(data => dispatch(receiveBikes(data)))
    }    
}
