
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger';
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['myUsers']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger();

let middleware = [];
middleware = [...middleware, thunk, logger];

const store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middleware))
);
const getStore = () => {
    return store;
}

export { store, getStore };





