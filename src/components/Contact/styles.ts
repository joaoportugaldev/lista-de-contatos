import styled from 'styled-components'
import variables from '../../styles/variables'

export const Contact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  height: 78px;
  border-bottom: 1px solid ${variables.cinza};
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`

export const InfoContainer = styled.div`
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

export const NameContainer = styled.div`
  width: 80%;
  margin-left: 16px;
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
export const Textarea = styled.textarea`
  background-color: ${variables.branco};
  border: none;
  padding: 0 4px;
  font-size: 16px;
  max-height: 1.4em;
  width: 80%;
  resize: none;
  overflow-y: hidden;
`
export const NameTextarea = styled(Textarea)`
  font-weight: 500;
`

export const Buttons = styled.div`
  min-width: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;

  span {
    background-color: #fff;
    border: none;
  }
`

export const Button = styled.button`
  border: none;
  background-color: #fff;
  display: flex;
  padding: 8px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  color: ${variables.verde};
`

export const ButtonDelete = styled(Button)`
  color: ${variables.vermelho};
`
