import React from 'react';
import { Provider } from 'react-redux';
import { render as renderReact } from 'react-dom';
import { debounce } from 'lodash';
import configureStore from 'store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from 'components/AppComponent';

const state = JSON.parse(localStorage.getItem('state'));
const store = configureStore(state || {});

const render = (Component) => {
    renderReact((
        <Provider store={store}>
            <Component />
        </Provider>
    ), document.getElementById('root'));
};

const saveState = debounce(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()));
}, 1000);

store.subscribe(() => {
    saveState();
    render(App);
    if (process.env.ENV === 'dev') {
        console.log('state', store.getState());
    }
});

store.dispatch({ type: 'APP_INIT', store });

registerServiceWorker();
