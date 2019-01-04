import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import { Frontload } from 'react-frontload'
import configureStore from "./store"
import * as serviceWorker from './serviceWorker'
const store = configureStore(window.__initialData__ || {});
window.__initialData__ = {}
const root = document.getElementById('root')
const AppDOM = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Frontload noServerRender={true}>
                <App />
            </Frontload>
        </BrowserRouter>
    </Provider>
)
if (root.hasChildNodes() === true) {
    ReactDOM.hydrate(<AppDOM />, root);
} else {
    ReactDOM.render(<AppDOM />, root);
}
serviceWorker.unregister();