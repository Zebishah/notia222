import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers/CombineNotes';
import thunk from 'redux-thunk';

// Use compose to apply multiple store enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
