import styled from 'styled-components'
import variables from '../../styles/variables'

export const Contact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 78px;
  border-bottom: 1px solid ${variables.cinza};
`
export const Name = styled.h3`
  font-size: 16px;
  font-weight: 500;
`
export const EmailTelContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`

export const ContactNameItem = styled.div`
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
