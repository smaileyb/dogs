import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from './PhotoContent'

const Photo = () => {
  const { id } = useParams()
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET(id)
    const { response, json } = request(url, options)
  }, [id, request])

  if (error) {
    return <Error error={error} />
  }
  if (loading) {
    return <Loading />
  }
  if (data) {
    return (
      <section className="container mainContainer">
        <PhotoContent single={true} data={data} />
      </section>
    )
  } else {
    return null
  }
}

export default Photo
