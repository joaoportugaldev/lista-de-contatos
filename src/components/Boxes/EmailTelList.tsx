import EmailTel from '../EmailTel'
import * as S from './styles'
import { contactsList } from './ContactNameList'

function EmailTelList() {
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
