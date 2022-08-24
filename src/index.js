import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'
import { ConfigProvider } from 'antd'
import fa_IR from 'antd/lib/locale/fa_IR'
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  //<React.StrictMode>
  <ConfigProvider direction='rtl' locale={fa_IR}>
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </ConfigProvider>
  //</React.StrictMode>
)
