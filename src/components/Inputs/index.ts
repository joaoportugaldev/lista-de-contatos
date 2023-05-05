import styled from 'styled-components'
import variables from '../../styles/variables'

export const Input = styled.input`
  padding: 8px 8px 8px 8px;
  width: 260px;
  border: 1px solid ${variables.cinza};
  border-radius: 8px;

  &:active,
  &:focus {
    outline: 1px solid ${variables.verde};
    border: 1px solid ${variables.verde};
  }

  @media (max-width: 767px) {
    max-width: 180px;
  }
`
