import React, { useContext } from 'react'
import styles from './LoginForm.module.css'
import stylesBtn from '../Form/Button.module.css'
import { Link } from 'react-router-dom'
import Input from '../Form/Input'
import Button from '../Form/Button'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import Error from '../Helper/Error'

const LoginForm = () => {
  const userName = useForm()
  const password = useForm()

  const { userLogin, error, loading } = useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()

    if (userName.validate() && password.validate()) {
      userLogin(userName.value, password.value)
    }
  }

  return (
    <section className={`animeLeft`}>
      <h1 className="title">Login</h1>
      <form className={styles.form} action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="userName" {...userName} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  )
}

export default LoginForm
