import styled from 'styled-components'
import { CheckboxProps } from './index'

type CheckboxStyledProps = Omit<CheckboxProps, 'id'>

export const CheckBoxStyled = styled.input<CheckboxStyledProps>`
  display: ${(props) => (props.display ? props.display : 'block')};
  margin-right: 8px;
  margin-left: 16px;
  width: 18px;
  height: 18px;
`
