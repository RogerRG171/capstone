import { 
  compose, 
  legacy_createStore as createStore, 
  applyMiddleware 
} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'

// import { loggerMiddleware } from './middleware/logger'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean)

const composeEnhancer = (process.env.NODE_ENV === 'development' 
&& window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose


const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composeEnhancers)

export const persistor = persistStore(store)