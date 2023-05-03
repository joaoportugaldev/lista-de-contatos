import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as S from './styles'
import Checkbox from '../Checkbox'
import { RootReducer } from '../../store'

export type Contact = {
  id: number
  name: string
  tel: string
  email: string
}

function Contact({
  id,
  name: originalName,
  tel: originalTel,
  email: originalEmail
}: Contact) {
  const isEditingState = useSelector((state: RootReducer) => state.isEditing)

  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    originalName.length ? setName(originalName) : setName('')
    originalTel.length ? setTel(originalTel) : setTel('')
    originalEmail.length ? setEmail(originalEmail) : setEmail('')
  }, [originalName, originalTel, originalEmail])

  return (
    <S.Contact>
      <S.ContactNameItem>
        <Checkbox id={id} />
        <img
          src="https://via.placeholder.com/40x40"
          alt="Foto de Perfil"
          className="foto-perfil"
        />
        <S.Name
          disabled={!isEditingState}
          value={name}
          onChange={(evento) => setName(evento.target.value)}
        />
      </S.ContactNameItem>
      <S.EmailTelItem>
        <S.EmailTelContent>
          <span className="material-symbols-outlined">mail</span>
          <S.Textarea
            disabled={!isEditingState}
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </S.EmailTelContent>
        <S.EmailTelContent>
          <span className="material-symbols-outlined">call</span>
          <S.Textarea
            disabled={!isEditingState}
            value={tel}
            onChange={(evento) => setTel(evento.target.value)}
          />
        </S.EmailTelContent>
      </S.EmailTelItem>
    </S.Contact>
  )
}

export default Contact
