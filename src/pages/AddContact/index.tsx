import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { adicionar } from '../../store/reducers/contactsList'

import { Input } from '../../components/Inputs'
import * as S from './styles'
import { useDispatch } from 'react-redux'

const AddContact = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  function adicionarContato(evento: FormEvent) {
    evento.preventDefault()

    dispatch(
      adicionar({
        name,
        tel,
        email
      })
    )
    navigate('/')
  }

  return (
    <S.Form onSubmit={adicionarContato}>
      <S.Arrowback to={'/'}>
        <span className="material-symbols-outlined">arrow_back</span>
      </S.Arrowback>
      <S.Title2>Novo Contato</S.Title2>
      <Input
        value={name}
        placeholder="Nome"
        type="text"
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <Input
        value={tel}
        placeholder="Telefone"
        type="number"
        onChange={(e) => {
          setTel(e.target.value)
        }}
      />
      <Input
        value={email}
        placeholder="Email"
        type="text"
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <S.ButtonsContainer>
        <S.Button type="submit">Adicionar</S.Button>
        <S.ButtonCancel type="button" onClick={() => navigate('/')}>
          Cancelar
        </S.ButtonCancel>
      </S.ButtonsContainer>
    </S.Form>
  )
}

export default AddContact
