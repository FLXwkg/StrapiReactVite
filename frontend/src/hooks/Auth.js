import { useCallback, useState } from "react";

const useLogin = () => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async ({identifier, password}) => {
    try {
      setIsLoading(true)
      const _response = await fetch('http://localhost:1337/api/auth/local',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({identifier, password})
      })   
      const _responseJson = await _response.json()
      if(_responseJson){
        localStorage.setItem('AUTH', JSON.stringify(_responseJson))
      }
      setResponse(_responseJson)
      setIsLoading(false)   
    } catch (error) {
      console.error(error)
      setError(error)      
      setIsLoading(false)
    }
  }, [])
  return {response, error, isLoading, login}
}
export default useLogin