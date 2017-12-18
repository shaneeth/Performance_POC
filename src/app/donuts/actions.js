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

export const fetchDonuts = () => {
    return dispatch => {
        dispatch(requestDonuts());
        return fetch('assets/json/donuts-original.json')
                .then(data => dispatch(receiveDonuts(data)))
    }    
}
