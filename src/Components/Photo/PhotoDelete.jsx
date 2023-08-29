import React from 'react'
import styles from './PhotoDelete.module.css'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch'

const PhotoDelete = ({ id }) => {
  const token = window.localStorage.getItem('token')
  const { loading, request } = useFetch()

  async function handleClick() {
    const confirm = window.confirm('Tem certeza de que deseja deletar a foto?')
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id, token)
      const { response } = await request(url, options)
      if (response.ok) {
        window.location.reload()
      }
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  )
}

export default PhotoDelete
