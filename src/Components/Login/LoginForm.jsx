import React, { useContext, useEffect, useState } from 'react'
import styles from './LoginForm.module.css'
import { Link } from 'react-router-dom'
import Input from '../Form/Input'
import Button from '../Form/Button'
import useForm from '../../Hooks/useForm'
import { TOKEN_POST, USER_GET } from '../../api'
import { UserContext } from '../../UserContext'

const LoginForm = () => {
  const userName = useForm()
  const password = useForm()

  const { userLogin } = useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()

    if (userName.validate() && password.validate()) {
      userLogin(userName.value, password.value)
    }
  }

  return (
    <section className={styles.login}>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="userName" {...userName} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm
