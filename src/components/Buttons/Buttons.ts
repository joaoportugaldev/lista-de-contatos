import styled from 'styled-components'

export const Button = styled.button`
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: #fdcb6e;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`

export const ButtonDelete = styled(Button)`
  background-color: #d63031;
`

export const ButtonEdit = styled(Button)`
  background-color: #00b894;
`
