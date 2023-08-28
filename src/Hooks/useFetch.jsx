import React, { useCallback, useState } from 'react'

const useFetch = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, options) => {
    let response
    let json
    try {
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()
      if (response.ok === false) {
        throw new Error(json.message)
      }
      setError(null)
    } catch (err) {
      json = null
      setError(err.message)
    } finally {
      setData(json)
      setLoading(false)
      return { response, json }
    }
  }, [])

  return { data, loading, error, request }
}

export default useFetch
