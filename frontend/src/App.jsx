import './App.css'
import Header from './components/header/Header'
import Router from './navigation/Router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <>
      <ToastContainer />
      <Header />
      <Router />
    </>
  )
}

export default App
