import { useState } from 'react'
import { router } from '@inertiajs/react'

export default function Edit() {
  const [values, setValues] = useState({
    nome: "",
    telefone: "",
    email: "",
  })

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/inscricao', values)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input id="nome" value={values.nome} onChange={handleChange} />
      <label htmlFor="email">email</label>
      <input id="email" value={values.email} onChange={handleChange} />
      <label htmlFor="telefone">Telefone:</label>
      <input id="telefone" value={values.telefone} onChange={handleChange} />
      <button type="submit">Salvar</button>
    </form>
  )
}