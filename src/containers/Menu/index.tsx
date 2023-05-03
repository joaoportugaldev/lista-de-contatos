import * as S from './styles'
import { Input } from '../../components/Inputs'
import { alterarTermo } from '../../store/reducers/search'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import ButtonAdd from '../../components/ButtonAdd'

function Menu() {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.search)

  return (
    <S.Nav>
      <Input
        type="text"
        placeholder="Procurar por Contatos"
        value={termo}
        onChange={(e) => dispatch(alterarTermo(e.target.value))}
      />
      <ButtonAdd />
    </S.Nav>
  )
}

export default Menu
