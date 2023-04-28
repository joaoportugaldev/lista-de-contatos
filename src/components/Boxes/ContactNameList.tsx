import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import ContactName from '../ContactName'
import * as S from './styles'

function ContactNameList() {
  const contactsList = useSelector(
    (state: RootReducer) => state.contactsList.contacts
  )

  return (
    <S.Box>
      <S.BoxTitle>Contact Name</S.BoxTitle>
      <S.BoxList>
        {contactsList.map((c) => (
          <ContactName key={c.name} name={c.name} id={c.id} />
        ))}
      </S.BoxList>
    </S.Box>
  )
}

export default ContactNameList
