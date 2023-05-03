import styled from 'styled-components'
import variables from '../../styles/variables'

export const Contact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 78px;
  border-bottom: 1px solid ${variables.cinza};
`

export const EmailTelContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`

export const ContactNameItem = styled.div`
  width: 80%;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-bottom: 1px solid ${variables.cinza};
  border-bottom: 1px solid ${variables.cinza};
  height: 78px;
  gap: 4px;
`

export const Textarea = styled.textarea`
  border: none;
  padding: 0 4px;
  font-size: 16px;
  max-height: 1.4em;
  width: 80%;
  resize: none;
  overflow-y: hidden;
`

export const Name = styled(Textarea)`
  font-weight: 500;
`
