import * as S from './styles'
import { ContactProps } from '../../containers/ContactBook'

type EmailTelProps = Omit<ContactProps, 'name'>

function EmailTel(props: EmailTelProps) {
  return (
    <S.EmailTelItem>
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
