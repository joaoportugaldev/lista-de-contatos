import styled from 'styled-components'
import variables from '../../styles/variables'

export const Button = styled.button`
  padding: 8px;
  border: none;
  border-radius: 8px;
  border: 1px solid ${variables.textButtonColor};
  background-color: ${variables.branco};
  color: ${variables.textButtonColor};
  letter-spacing: 1px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`

export const ButtonDelete = styled(Button)`
  border: none;
  background-color: ${variables.vermelho};
  color: ${variables.branco};
`

export const ButtonSave = styled(Button)`
  border: none;
  background-color: ${variables.verde};
  color: ${variables.branco};
`
