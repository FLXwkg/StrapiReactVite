import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [response, setResponse] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const _response = await fetch(url)
        const _responseJson = await _response.json()
        setResponse(_responseJson.data)
        setIsLoading(false)
      } catch (e) {
        console.error(e)
        setError(e)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { response, error, isLoading }
}
export { useFetch }
