import { useSelector } from 'react-redux'

import * as S from './styles'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'

function ContactListSection() {
  const { contacts } = useSelector((state: RootReducer) => state.contactsList)
  const { termo } = useSelector((state: RootReducer) => state.search)

  const filterContacts = () => {
    if (termo) {
      return contacts.filter(
        (c) => c.name.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    } else {
      return contacts
    }
  }

  return (
    <S.ContactList>
      {filterContacts().map((c) => (
        <li key={c.id}>
          <Contact id={c.id} name={c.name} tel={c.tel} email={c.email} />
        </li>
      ))}
    </S.ContactList>
  )
}

export default ContactListSection
