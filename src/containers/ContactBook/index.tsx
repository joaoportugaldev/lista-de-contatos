import { useSelector } from 'react-redux'

import * as S from './styles'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'

function ContactListSection() {
  const { contacts } = useSelector((state: RootReducer) => state.contactsList)
  return (
    <S.ContactList>
      {contacts.map((c) => (
        <li key={c.id}>
          <Contact id={c.id} name={c.name} tel={c.tel} email={c.email} />
        </li>
      ))}
    </S.ContactList>
  )
}

export default ContactListSection
