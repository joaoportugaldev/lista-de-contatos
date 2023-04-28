import Checkbox from '../Checkbox'
import * as S from './styles'
import { Contact } from '../../containers/ContactBook'

type EmailTelProps = Omit<Contact, 'name'>

function EmailTel(props: EmailTelProps) {
  return (
    <S.EmailTelItem>
      <Checkbox id={props.id} />
      <S.EmailTelContent>
        <span className="material-symbols-outlined">mail</span>
        <span>{props.email}</span>
      </S.EmailTelContent>
      <S.EmailTelContent>
        <span className="material-symbols-outlined">call</span>
        <span>{props.tel}</span>
      </S.EmailTelContent>
    </S.EmailTelItem>
  )
}

export default EmailTel
