import { Input } from '../../components/Inputs'
import * as S from './styles'

const AddContact = () => {
  return (
    <S.Form>
      <S.Arrowback to={'/'}>
        <span className="material-symbols-outlined">arrow_back</span>
      </S.Arrowback>
      <S.Title2>Novo Contato</S.Title2>
      <Input placeholder="Nome" type="text" />
      <Input placeholder="Telefone" type="number" />
      <Input placeholder="Email" type="text" />
      <S.ButtonsContainer>
        <S.Button type="submit">Adicionar</S.Button>
        <S.ButtonCancel>Cancelar</S.ButtonCancel>
      </S.ButtonsContainer>
    </S.Form>
  )
}

export default AddContact
