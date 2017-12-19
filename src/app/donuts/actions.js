import createAction from '@utility/createAction';
import fetch from '@utility/fetch';
import constants from './constants';


const requestDonuts = () => {
    return createAction(constants.REQUEST);
}

const receiveDonuts = (data) => {
    return createAction(constants.RECEIVE, {
        data
    });
}

const nextPage = () => {
    return createAction(constants.NEXT_PAGE);
}

export const resetDonuts = () => {
    return createAction(constants.RESET);
}

export const fetchDonuts = (page) => {
    return dispatch => {
        dispatch(requestDonuts());
        return fetch(`assets/json/donuts/${page}.json`)
                .then(data => {
                    dispatch(nextPage())
                    dispatch(receiveDonuts(data))
                })
    }    
}
