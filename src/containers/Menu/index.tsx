import * as S from './styles'
import { Input } from '../../components/Inputs'
import * as B from '../../components/Buttons/Buttons'

function Menu() {
  return (
    <S.Nav>
      <Input type="text" placeholder="Procurar por Contatos" />
      <S.ButtonsContainer>
        <B.Button>Adicionar</B.Button>
        <B.ButtonDelete>Deletar</B.ButtonDelete>
        <B.ButtonEdit>Editar</B.ButtonEdit>
      </S.ButtonsContainer>
    </S.Nav>
  )
}

export default Menu
