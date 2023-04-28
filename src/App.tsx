import { Provider } from 'react-redux'
import store from './store'

import { GlobalStyle } from './styles'
import { Container, Title, MainContainer } from './styles'
import ContactListSection from './containers/ContactBook'
import Menu from './containers/Menu'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Title>Lista de Contatos</Title>
        <MainContainer>
          <Menu />
          <ContactListSection />
        </MainContainer>
      </Container>
    </Provider>
  )
}

export default App
