import React from 'react'
import styles from './Home.module.css'
import Feed from './Feed/Feed'

const Home = () => {
  return (
    <section className={'${styles.home} container mainContainer'}>
      <Feed />
    </section>
  )
}

export default Home
