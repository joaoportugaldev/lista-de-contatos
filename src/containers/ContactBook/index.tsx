import * as S from './styles'
import ContactNameList from '../../components/Boxes/ContactNameList'
import EmailTelList from '../../components/Boxes/EmailTelList'

export type ContactProps = {
  name: string
  tel: string
  email: string
  id: number
}

function ContactListSection() {
  return (
    <S.SectionGrid>
      <ContactNameList />
      <EmailTelList />
    </S.SectionGrid>
  )
}

export default ContactListSection
