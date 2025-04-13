import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { store } from './components/app/store.js'
import '@ant-design/v5-patch-for-react-19'
import './fonts/fonts.scss'

import App from './components/app/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
