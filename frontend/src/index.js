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
        'client-id':
          'ARVAZBnpyH8idWNtxTIPQhYwNBuMj0hLDq2kaTUi0tzVeJFEP4JaMm7ESFGTPzH9RRUZjfYgAmNgiO4w',
        currency: 'USD',
      }}
    >
      <App />
    </PayPalScriptProvider>
  </Provider>
)

reportWebVitals()
