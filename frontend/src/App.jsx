import './App.css'
import Header from './components/header/Header'
import Router from './navigation/Router'
import { AuthProvider } from './contexts/authContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <Header />
        <Router />
      </AuthProvider>
    </>
  )
}

export default App
