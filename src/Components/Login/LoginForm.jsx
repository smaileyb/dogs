import React, { useState } from 'react'
import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom'
import Input from '../Form/Input'
import Button from '../Form/Button'

const LoginForm = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const url = 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName,
        password
      })
    })
    const responseJSON = await response.json()
    console.log(responseJSON)
  }

  return (
    <section className={styles.login}>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="userName" />
        <Input label="Senha" type="password" name="password" />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm
