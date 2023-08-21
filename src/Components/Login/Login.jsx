import React from 'react'
import styles from './Login.module.css'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginLost from './LoginLost'
import LoginReset from './LoginReset'

const Login = () => {
  return (
    <div className={styles.login}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginLost />} />
        <Route path="resetar" element={<LoginReset />} />
      </Routes>
      Login
    </div>
  )
}

export default Login
