import { combineReducers } from 'redux';
import dashboard from './dashboard/reducer';
import places from './places/reducer';
import donuts from './donuts/reducer';
import bikes from './bikes/reducer';


export default combineReducers({
    dashboard,
    places,
    donuts,
    bikes
});

