import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variables from '../../styles/variables'

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${variables.verde};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${variables.branco};
  font-size: 24px;
  text-decoration: none;

  &:hover {
    transform: scale(1.02);
  }
`
