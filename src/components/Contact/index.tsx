import * as S from './styles'
import Checkbox from '../Checkbox'

export type Contact = {
  id: number
  name: string
  tel: string
  email: string
}

function Contact({ id, name, tel, email }: Contact) {
  return (
    <S.Contact>
      <S.ContactNameItem>
        <Checkbox id={id} />
        <img
          src="https://via.placeholder.com/40x40"
          alt="Foto de Perfil"
          className="foto-perfil"
        />
        <S.Name>{name}</S.Name>
      </S.ContactNameItem>
      <S.EmailTelItem>
        <S.EmailTelContent>
          <span className="material-symbols-outlined">mail</span>
          <span>{email}</span>
        </S.EmailTelContent>
        <S.EmailTelContent>
          <span className="material-symbols-outlined">call</span>
          <span>{tel}</span>
        </S.EmailTelContent>
      </S.EmailTelItem>
    </S.Contact>
  )
}

export default Contact
