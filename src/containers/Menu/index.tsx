import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as S from './styles'
import { Input } from '../../components/Inputs'
import * as B from '../../components/Buttons/Buttons'
import { RootReducer } from '../../store'
import { remover } from '../../store/reducers/contactsList'

function Menu() {
  const [isEditing, setIsEditing] = useState(false)
  const selectedContact = useSelector(
    (state: RootReducer) => state.checkbox.checkboxes
  )
  const selectedContactId = Object.keys(selectedContact).map((c) => parseInt(c))
  const dispatch = useDispatch()

  return (
    <S.Nav>
      <Input type="text" placeholder="Procurar por Contatos" />
      <S.ButtonsContainer>
        {isEditing ? (
          <>
            <B.ButtonSave onClick={() => setIsEditing(false)}>
              Salvar
            </B.ButtonSave>
            <B.ButtonDelete onClick={() => setIsEditing(false)}>
              Cancelar
            </B.ButtonDelete>
          </>
        ) : (
          <>
            <B.Button>Adicionar</B.Button>
            <B.Button onClick={() => setIsEditing(true)}>Editar</B.Button>
            <B.Button
              onClick={() => {
                selectedContactId.forEach((c) => dispatch(remover(c)))
              }}
            >
              Remover
            </B.Button>
          </>
        )}
      </S.ButtonsContainer>
    </S.Nav>
  )
}

export default Menu
