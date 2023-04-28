import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`

export const Container = styled.div`
  max-width: 767px;
  width: 100%;
  margin: 0 auto;
`

export const Title = styled.h1`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: bold;
`

export const MainContainer = styled.main`
  margin: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`
