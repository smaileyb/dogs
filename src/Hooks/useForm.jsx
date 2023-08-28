import React, { useState } from 'react'

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'CEP inválido!'
  },
  email: {
    regex:
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    message: 'E-mail inválido!'
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'A senha precisa ter 1 caractere maiúsculo, 1 minúsculo, 1 dígito e 1 caractere especial. A senha também deve ter o mínimo de oito caracteres.'
  }
}

const useForm = type => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  function validate(value) {
    if (type === false) return true
    if (value.length === 0) {
      setError('Preencha um valor.')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange({ target }) {
    if (error) {
      validate(target.value)
    }
    setValue(target.value)
  }

  return {
    value,
    setValue,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm
