import * as S from './styles'

import { useState } from 'react'

import { Input } from '../../components/Inputs'
import * as B from '../../components/Buttons/Buttons'

function Menu() {
  const [isEditing, setIsEditing] = useState(false)

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
            <B.Button>Remover</B.Button>
          </>
        )}
      </S.ButtonsContainer>
    </S.Nav>
  )
}

export default Menu
