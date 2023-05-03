import styled from 'styled-components'
import variables from '../../styles/variables'

export const Input = styled.input`
  padding: 8px 8px 8px 8px;
  min-width: 300px;
  border: 1px solid ${variables.cinza};
  border-radius: 8px;

  &:active,
  &:focus {
    outline: 2px solid ${variables.verde};
  }
`
