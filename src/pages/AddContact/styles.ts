import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variables from '../../styles/variables'
import { Title } from '../../styles'

export const Form = styled.form`
  position: relative;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const Title2 = styled(Title)`
  color: ${variables.verde};
  margin: 0;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  color: ${variables.branco};
  font-weight: 500;
  background-color: ${variables.verde};
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`

export const ButtonCancel = styled(Button)`
  color: ${variables.vermelho};
  background-color: ${variables.branco};
  border: 1px solid ${variables.vermelho};
`

export const Arrowback = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: 40px;
  height: 40px;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:active,
  &:hover {
    color: ${variables.verde};
  }

  span {
    font-size: 28px;

    &:hover {
      transform: scale(1.1);
    }
  }
`
