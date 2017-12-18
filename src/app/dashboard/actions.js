import createAction from '@utility/createAction';
import fetch from '@utility/fetch';
import constants from './constants'

const requestDetails = () => {
    return createAction(constants.REQUEST);
}

const receiveDetails = (data) => {
    return createAction(constants.RECEIVE, {
        data
    });
}

export const fetchDetails = () => {
    return dispatch => {
        dispatch(requestDetails());
        return fetch('assets/json/dashboard.json')
                .then(data => dispatch(receiveDetails(data)))
    }
}