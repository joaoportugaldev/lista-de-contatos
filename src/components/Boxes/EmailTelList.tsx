import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import EmailTel from '../EmailTel'
import * as S from './styles'

function EmailTelList() {
  const contactsList = useSelector(
    (state: RootReducer) => state.contactsList.contacts
  )
  return (
    <S.Box>
      <S.SecondBoxTitle>Contact</S.SecondBoxTitle>
      <S.SecondBoxList>
        {contactsList.map((c) => (
          <EmailTel key={c.name} email={c.email} tel={c.tel} id={c.id} />
        ))}
      </S.SecondBoxList>
    </S.Box>
  )
}

export default EmailTelList
