import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const store = createStore(rootReducer);

import AppContainer from './containers/AppContainer.js';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <AppContainer />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
