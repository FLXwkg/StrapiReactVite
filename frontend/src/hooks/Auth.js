import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

const useLogin = () => {
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const login = useCallback(async ({ identifier, password }) => {
    try {
      setIsLoading(true)
      const _response = await fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ identifier, password })
      })
      const _responseJson = await _response.json()
      if (_response.ok) {
        if (_responseJson) {
          window.localStorage.setItem('AUTH', JSON.stringify(_responseJson))
        }
        setResponse(_responseJson)
      } else {
        setError(_responseJson?.error?.message)
        toast.error(_responseJson?.error?.message)
      }
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }, [])
  return { response, error, isLoading, login }
}
export default useLogin
