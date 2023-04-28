import * as S from './styles'
import { Contact } from '../../containers/ContactBook'
import { RootReducer } from '../../store'
import Checkbox from '../Checkbox'

type ContactName = Omit<Contact, 'tel' | 'email'>

function ContactName(props: ContactName) {
  return (
    <S.ContactNameItem>
      <Checkbox id={props.id} />
      <img
        src="https://via.placeholder.com/40x40"
        alt="Foto de Perfil"
        className="foto-perfil"
      />
      <S.Name>{props.name}</S.Name>
    </S.ContactNameItem>
  )
}

export default ContactName
