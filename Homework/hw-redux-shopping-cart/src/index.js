import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' //defaults to local storage for web
import {PersistGate} from 'redux-persist/integration/react'
import ProductDetails from './components/ProductDetails'
import Checkout from './components/Checkout'

const persistConfig = {
  key: 'root',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let persistor = persistStore(store)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
    <Router>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/details/:id" element={<ProductDetails />}/>
          <Route path="/checkout" element={<Checkout/>}/>
          
        </Routes>
      </BaseLayout>
    </Router>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

