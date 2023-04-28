import styled from 'styled-components'

export const ContactNameItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  height: 78px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .foto-perfil {
    border-radius: 50%;
  }
`

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 500;
`
export const selectContact = styled.input`
  background-color: red;
  margin-right: 8px;
  width: 18px;
  height: 18px;
`
