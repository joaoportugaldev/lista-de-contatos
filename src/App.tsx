import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './store'

import { GlobalStyle } from './styles'
import { Container, Title, MainContainer } from './styles'
import Home from './pages/Home'
import AddContact from './pages/AddContact'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/adicionar',
    element: <AddContact />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Title>Lista de Contatos</Title>
        <MainContainer>
          <RouterProvider router={rotas} />
        </MainContainer>
      </Container>
    </Provider>
  )
}

export default App
