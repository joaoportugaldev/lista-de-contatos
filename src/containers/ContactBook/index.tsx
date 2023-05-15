import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import * as S from './styles'
import Contact from '../../components/Contact'
import { ContactProps } from '../../components/Contact'

import { RootReducer } from '../../store'

function ContactListSection() {
  const { contacts } = useSelector((state: RootReducer) => state.contactsList)
  const { termo } = useSelector((state: RootReducer) => state.search)
  const [allContacts, setAllContacts] = useState<ContactProps[]>([])

  const filterContacts = () => {
    if (termo) {
      return allContacts.filter(
        (c) => c.name.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    } else {
      return allContacts
    }
  }

  const url = 'http://localhost:3000/contacts'

  useEffect(() => {
    async function getAllContacts() {
      const res = await fetch(url)
      const data = await res.json()
      setAllContacts(data)
    }

    getAllContacts()
  }, [])

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
