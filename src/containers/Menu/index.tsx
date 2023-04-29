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
  const selectedContactId: number[] = Object.entries(selectedContact)
    .map(([id, value]) => {
      if (value === true) {
        return parseFloat(id)
      }
    })
    .filter((id) => id !== undefined) as number[]

  const dispatch = useDispatch()

  function handleClickRemoveButton() {
    selectedContactId.forEach((id) => dispatch(remover(id)))
  }

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
                handleClickRemoveButton()
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
