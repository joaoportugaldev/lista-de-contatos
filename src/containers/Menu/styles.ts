import styled from 'styled-components'
import variables from '../../styles/variables'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid ${variables.cinza};
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`
