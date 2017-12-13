import { combineReducers } from 'redux';
import header from './header/reducer'
import dashboard from './dashboard/reducer';

export default combineReducers({
    header,
    dashboard
});

