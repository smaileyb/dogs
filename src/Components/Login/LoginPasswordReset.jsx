import React, { useEffect, useState } from 'react'

import Input from './../Form/Input'
import Button from './../Form/Button'
import useForm from './../../Hooks/useForm'
import { PASSWORD_RESET } from '../../api'
import useFetch from './../../Hooks/useFetch'
import Error from '../Helper/Error'
import { useNavigate } from 'react-router-dom'
import Head from '../Helper/Head'

const LoginPasswordReset = () => {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')
  const { error, loading, request } = useFetch()

  const password = useForm('password')

  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if (key) {
      setKey(key)
    }
    if (login) {
      setLogin(login)
    }
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      const { response } = await request(url, options)
      if (response.ok) {
        navigate('/login')
      }
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resete sua senha!" />
      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordReset
