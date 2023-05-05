import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  max-width: 767px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 90%;
  }
`

export const Title = styled.h1`
  display: block;
  color: ${variables.verde};
  margin: 40px 0px;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    margin: 20px 0px;
  }
`

export const MainContainer = styled.main`
  margin: 8px;
  border: 1px solid ${variables.cinza};
`
