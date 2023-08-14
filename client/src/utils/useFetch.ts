import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<boolean | string>(false)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url)
      const data = await response.data
      setData(data)
      setIsLoading(false)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url])

  const refetch = () => {
    fetchData(url);
  };

  return { data, isLoading, error, refetch }
}

export default useFetch