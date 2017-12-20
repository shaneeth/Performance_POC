import createAction from '@utility/createAction';
import fetch from '@utility/fetch';
import constants from './constants';


const requestPlaces = () => {
    return createAction(constants.REQUEST);
}

const receivePlaces = (data) => {
    return createAction(constants.RECEIVE, {
        data
    });
}

export const fetchPlaces = () => {
    return dispatch => {
        dispatch(requestPlaces());
        return fetch('assets/json/places.json')
                .then(data => dispatch(receivePlaces(data)))
    }    
}
