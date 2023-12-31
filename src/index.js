import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './Context/productContext';
import { FilterContextProvider } from './Context/filterContext';
import { CartProvider } from './Context/cartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </React.StrictMode>
);

