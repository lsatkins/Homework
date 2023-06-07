import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShoppingList from './components/ShoppingList'
import AddressBook from './components/AddressBook'
import ColorPicker from './components/ColorPicker'
import BaseLayout from './components/layout/BaseLayout'

import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <Router>

    <BaseLayout>

      <Switch>

        <Route path="/" element={<App />} />
        <Route path="/list" element={<ShoppingList />} />
        <Route path="/address" element={<AddressBook />} />
        <Route path="/color" element={<ColorPicker />} />

      </Switch>

    </BaseLayout>

  </Router>

);


