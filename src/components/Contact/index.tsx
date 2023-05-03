import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { setIsEditing } from '../../store/reducers/isEditing'

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
  const { isEditing } = useSelector((state: RootReducer) => state)

  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    originalName.length ? setName(originalName) : setName('')
    originalTel.length ? setTel(originalTel) : setTel('')
    originalEmail.length ? setEmail(originalEmail) : setEmail('')
  }, [originalName, originalTel, originalEmail])

  const dispatch = useDispatch()

  return (
    <S.Contact>
      <S.NameContainer>
        <img
          className="foto-perfil"
          src="https://via.placeholder.com/50x50"
          alt="Foto de Perfil"
        />
        <S.NameTextarea
          disabled={!isEditing}
          value={name}
          onChange={(evento) => setName(evento.target.value)}
        />
      </S.NameContainer>
      <S.InfoContainer>
        <S.Info>
          <span className="material-symbols-outlined">mail</span>
          <S.Textarea
            disabled={!isEditing}
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </S.Info>
        <S.Info>
          <span className="material-symbols-outlined">call</span>
          <S.Textarea
            disabled={!isEditing}
            value={tel}
            onChange={(evento) => setTel(evento.target.value)}
          />
        </S.Info>
      </S.InfoContainer>
      <S.Buttons>
        {isEditing ? (
          <>
            <S.Button onClick={() => dispatch(setIsEditing(false))}>
              <span className="material-symbols-outlined">check</span>
            </S.Button>
            <S.Button>
              <span className="material-symbols-outlined">close</span>
            </S.Button>
          </>
        ) : (
          <>
            <S.Button onClick={() => dispatch(setIsEditing(true))}>
              <span className="material-symbols-outlined">edit</span>
            </S.Button>
            <S.Button>
              <span className="material-symbols-outlined">delete</span>
            </S.Button>
          </>
        )}
      </S.Buttons>
    </S.Contact>
  )
}

export default Contact
