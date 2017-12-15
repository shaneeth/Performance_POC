import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme} from '@mui/styles';
import baseTheme from '@utility/Theme';
import App from './app/App';
import reducers from './app/reducers';
import './styles';

const store = createStore(reducers);
const theme = createMuiTheme(baseTheme);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <Router>
                <App />                
            </Router>
        </Provider>
    </MuiThemeProvider>, document.getElementById('root'));

