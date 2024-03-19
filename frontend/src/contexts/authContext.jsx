import { createContext, useContext, useReducer } from 'react'
import { loginApi } from '../services/api'

const AuthContext = createContext()

const actionTypes = {
  LOGIN: 'LOGIN',
  REGISTER: 'REGISTER',
  LOGOUT: 'LOGOUT',
  LOADING: 'LOADING',
  RESET: 'RESET',
  ERROR: 'ERROR'
}

const initialState = {
  jwt: null,
  user: null,
  loading: false,
  error: null
}

/**
 * @param prevState état précedent
 * @param action mise a jour de l'etat = { type, data? }
 */
const authReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
    case actionTypes.REGISTER:
      return {
        ...initialState,
        jwt: action.data.jwt,
        user: action.data.user
      }
    case actionTypes.LOADING:
      return {
        ...prevState,
        loading: true
      }
    case actionTypes.ERROR:
      return {
        ...initialState,
        error: action.data.error
      }
    case actionTypes.RESET:
    case actionTypes.LOGOUT:
      return initialState
    default:
      throw new Error(`Unhandled action type : ${action.type}`)
  }
}

const authFactory = (dispatch) => ({
  login: async (credentials) => {
    dispatch({ type: actionTypes.LOADING })
    try {
      const result = await loginApi(credentials)
      dispatch({
        type: actionTypes.LOGIN,
        data: {
          user: result.user,
          jwt: result.jwt
        }
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: actionTypes.ERROR,
        data: error
      })
    }
  },
  logout: () => {
    dispatch({ type: actionTypes.LOGOUT })
  }
})

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    <AuthContext.Provider value={{ state, ...authFactory(dispatch) }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside an <AuthProvider')
  return context
}

export {
  AuthProvider,
  useAuth
}
