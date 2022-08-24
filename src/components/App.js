import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import Footer from './generic/Footer'
import Header from './generic/Header'
import Page404 from './generic/404'
import Todo from '../components/generic/Todo'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from './utils/Spinner'
import '../assets/css/general.css'
import 'antd/dist/antd.css'
import Test from './generic/test'

const { Content } = Layout

function App () {
  const dispatch = useDispatch()

  const userIsLoading = useSelector(state => state.userIsLoading)

  if (userIsLoading) {
    return <Spinner />
  }

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
