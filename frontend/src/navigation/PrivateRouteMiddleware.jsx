import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoutes () {
  const authString = window.localStorage.getItem('AUTH')
  const AUTH = JSON.parse(authString)
  const token = AUTH?.jwt
  return <>{token ? <Outlet /> : <Navigate to='/authentication' />}</>
}

export default PrivateRoutes
