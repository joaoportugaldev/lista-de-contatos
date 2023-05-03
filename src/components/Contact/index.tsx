import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import { editar, remover } from '../../store/reducers/contactsList'

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
  // const { isEditing } = useSelector((state: RootReducer) => state)
  const [estaEditando, setEstaEditando] = useState(false)
  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    originalName.length ? setName(originalName) : setName('')
    originalTel.length ? setTel(originalTel) : setTel('')
    originalEmail.length ? setEmail(originalEmail) : setEmail('')
  }, [originalName, originalTel, originalEmail])

  const dispatch = useDispatch()

  function cancelEditing() {
    setEstaEditando(false)
    setName(originalName)
    setTel(originalTel)
    setEmail(originalEmail)
  }

  function toEdit() {
    setEstaEditando(false)
    dispatch(
      editar({
        id: id,
        name: name,
        tel: tel,
        email: email
      })
    )
  }

  return (
    <S.Contact>
      <S.NameContainer>
        <img
          className="foto-perfil"
          src="https://via.placeholder.com/50x50"
          alt="Foto de Perfil"
        />
        <S.NameTextarea
          disabled={!estaEditando}
          value={name}
          onChange={(evento) => setName(evento.target.value)}
        />
      </S.NameContainer>
      <S.InfoContainer>
        <S.Info>
          <span className="material-symbols-outlined">mail</span>
          <S.Textarea
            disabled={!estaEditando}
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </S.Info>
        <S.Info>
          <span className="material-symbols-outlined">call</span>
          <S.Textarea
            disabled={!estaEditando}
            value={tel}
            onChange={(evento) => setTel(evento.target.value)}
          />
        </S.Info>
      </S.InfoContainer>
      <S.Buttons>
        {estaEditando ? (
          <>
            <S.Button onClick={() => toEdit()}>
              <span className="material-symbols-outlined">check</span>
            </S.Button>
            <S.ButtonDelete onClick={() => cancelEditing()}>
              <span className="material-symbols-outlined">close</span>
            </S.ButtonDelete>
          </>
        ) : (
          <>
            <S.Button onClick={() => setEstaEditando(true)}>
              <span className="material-symbols-outlined">edit</span>
            </S.Button>
            <S.ButtonDelete onClick={() => dispatch(remover(id))}>
              <span className="material-symbols-outlined">delete</span>
            </S.ButtonDelete>
          </>
        )}
      </S.Buttons>
    </S.Contact>
  )
}

export default Contact
