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

export const fetchBikes = () => {
    return dispatch => {
        dispatch(requestBikes());
        return fetch('assets/json/bikes-original.json')
                .then(data => dispatch(receiveBikes(data)))
    }    
}
