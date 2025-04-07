import { ConfigProvider } from 'antd'

import Header from '../header/Header.jsx'
import LeftSider from '../left-sider/LeftSider.jsx'

import { token } from './antdGlobalTokens.js'
import classes from './app.module.scss'

export default function App() {
  return (
    <div className={classes['aviasales']}>
      <Header />
      <main className={classes['aviasales-main']}>
        <ConfigProvider theme={{ token: token }}>
          <LeftSider />
        </ConfigProvider>
      </main>
    </div>
  )
}
