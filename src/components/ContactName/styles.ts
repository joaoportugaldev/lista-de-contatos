import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContactNameItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  height: 78px;
  border-bottom: 1px solid ${variables.cinza};

  .foto-perfil {
    border-radius: 50%;
  }
`

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 500;
`
