import React, { useContext } from 'react'
import styles from './Login.module.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginLost from './LoginLost'
import LoginReset from './LoginReset'
import { UserContext } from '../../UserContext'
import NotFound from '../NotFound'

const Login = () => {
  const { login } = useContext(UserContext)

  if (login === true) return <Navigate to="/conta" />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginLost />} />
          <Route path="resetar" element={<LoginReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
