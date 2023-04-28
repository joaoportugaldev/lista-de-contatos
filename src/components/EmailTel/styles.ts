import styled from 'styled-components'
import variables from '../../styles/variables'

export const EmailTelItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-bottom: 1px solid ${variables.cinza};
  height: 78px;
  border-bottom: 1px solid ${variables.cinza};
  gap: 4px;
`

export const EmailTelContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`
