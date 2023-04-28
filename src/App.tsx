import { GlobalStyle } from './styles'
import { Container, Title, MainContainer } from './styles'
import ContactListSection from './containers/ContactBook'
import Menu from './containers/Menu'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Lista de Contatos</Title>
        <MainContainer>
          <Menu />
          <ContactListSection />
        </MainContainer>
      </Container>
    </>
  )
}

export default App
