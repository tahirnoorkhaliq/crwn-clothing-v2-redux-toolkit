import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);
/*import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);


const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store); */

export const store = configureStore({
  reducer: rootReducer,
  //1 way
  //middleware:middleWares
  //2nd way
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
  //3rd way
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }).concat(middleWares),
    //4th way
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});
