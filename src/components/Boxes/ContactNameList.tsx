import ContactName from '../ContactName'
import * as S from './styles'
import Contact from '../../models/Contact'
import { ContactProps } from '../../containers/ContactBook'

const joao = new Contact(
  'João Portugal',
  '21989434454',
  'joaosportugal@hotmail.com',
  1
)
const pedro = new Contact(
  'Pedro Menescal',
  '71988874729',
  'castelobranco@gmail.com',
  2
)
const bruno = new Contact(
  'Bruno Reis',
  '61787878787',
  'brunoreis@outlook.com',
  3
)

export const contactsList: ContactProps[] = [joao, pedro, bruno]

function ContactNameList() {
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
