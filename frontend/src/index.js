import React from 'react'
import ReactDOM from 'react-dom/client'
import './bootstrap.min.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store.js'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <PayPalScriptProvider
      options={{
        'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID,
        currency: 'USD',
      }}
    >
      <App />
    </PayPalScriptProvider>
  </Provider>
)

reportWebVitals()
