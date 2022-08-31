import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import Footer from './generic/Footer'
import Header from './generic/Header'
import Page404 from './generic/404'
import Todo from './generic/Todo'
import '../assets/css/general.css'
import 'antd/dist/antd.css'
const { Content } = Layout

function App () {

  return (
    <div className='App'>
      <Layout>
        <Header />
        <Layout>
          <Content className='content'>
            <Routes>
              <Route path='/' element={<Todo />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
