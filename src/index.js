import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = storeConfig();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
