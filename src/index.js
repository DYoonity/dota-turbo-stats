import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import App from './components/App';
import store from './store/store';
import { openDotaApi } from './features/matches/openDotaApiSlice'
// import styles from './scss/application.scss';

const root = createRoot(document.getElementById('root'));
root.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
        <ApiProvider api={openDotaApi}>
            <App />
        </ApiProvider>
    </Provider>
);
