import React from 'react'
import styles from './UserProfile.module.css'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed'

const UserProfile = () => {
  const { user } = useParams()
  return (
    <section className="container mainContainer">
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  )
}

export default UserProfile
