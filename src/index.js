import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

/** TODO: Add REDUCERS */
const airlineList = (state = [], action) => {
    if (action.type === "ADD_AIRLINE"){
        return [...state, action.payload];
    }
    return state;
}

/** TODO: Create store */
const store = createStore(
    combineReducers({
        airlineList
    }),
    applyMiddleware(logger)
);


// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);