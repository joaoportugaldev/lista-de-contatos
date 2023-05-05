import styled from 'styled-components'
import variables from '../../styles/variables'

export const Contact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  height: fit-content;
  border-bottom: 1px solid ${variables.cinza};
  overflow-x: hidden;

  @media (max-width: 767px) {
    grid-template-columns: none;
    height: fit-content;
    grid-template-areas:
      'a b'
      'c c';

    & > div:nth-child(1) {
      grid-area: a;
    }

    & > div:nth-child(2) {
      grid-area: c;
    }

    & > div:nth-child(3) {
      grid-area: b;
    }
  }
`

export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-weight: 500;

  @media (max-width: 767px) {
    border: none;
  }
`

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1px solid ${variables.cinza};
  border-bottom: 1px solid ${variables.cinza};
  height: 78px;
  gap: 4px;

  @media (max-width: 767px) {
    height: fit-content;
    padding: 8px 0px;
    border: none;
    margin-left: 16px;
  }
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

  @media (max-width: 767px) {
    height: fit-content;
    border: none;
    padding-top: 8px;

    .foto-perfil {
      border-radius: 50%;
      display: none;
    }
  }
`
export const Textarea = styled.textarea`
  background-color: ${variables.branco};
  color: ${variables.textButtonColor};
  font-weight: 500;
  border: none;
  padding: 0px 4px;
  font-size: 16px;
  max-height: 1.5em;
  width: 80%;
  resize: none;
  overflow-y: hidden;
  outline: none;

  &:focus {
    border: 2px solid ${variables.verde};
    border-radius: 8px;
  }
`
export const NameTextarea = styled(Textarea)`
  font-weight: 500;
  font-size: 18px;
  text-transform: capitalize;
  padding: 0px;

  @media (max-width: 767px) {
    color: ${variables.verde};
  }
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

  @media (max-width: 767px) {
    justify-content: end;
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
