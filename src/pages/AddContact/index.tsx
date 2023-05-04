import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { adicionar } from '../../store/reducers/contactsList'

import { Input } from '../../components/Inputs'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { RootReducer } from '../../store'

const AddContact = () => {
  const { contacts } = useSelector((state: RootReducer) => state.contactsList)

  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState({
    id: 0,
    name: '',
    tel: '',
    email: ''
  })

  useEffect(() => {
    setContact({
      id: contacts.length + 1,
      name: name,
      tel: tel,
      email: email
    })
  }, [name, tel, email, contacts.length])

  const dispatch = useDispatch()

  function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    dispatch(adicionar(contact))
  }

  return (
    <S.Form>
      <S.Arrowback to={'/'}>
        <span className="material-symbols-outlined">arrow_back</span>
      </S.Arrowback>
      <S.Title2>Novo Contato</S.Title2>
      <Input
        placeholder="Nome"
        type="text"
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <Input
        placeholder="Telefone"
        type="number"
        onChange={(e) => {
          setTel(e.target.value)
        }}
      />
      <Input
        placeholder="Email"
        type="text"
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      <S.ButtonsContainer>
        <S.Button type="submit" onClick={(e) => handleClick(e)}>
          Adicionar
        </S.Button>
        <S.ButtonCancel>Cancelar</S.ButtonCancel>
      </S.ButtonsContainer>
    </S.Form>
  )
}

export default AddContact
