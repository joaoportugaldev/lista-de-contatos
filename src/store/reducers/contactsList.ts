import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContactProps } from '../../components/Contact'

type ContactsState = {
  contacts: ContactProps[]
}

const initialState: ContactsState = {
  contacts: []
}

const contactsListSlice = createSlice({
  name: 'contactsList',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<ContactProps, 'id'>>) => {
      const existeInfoRepetida = (info: 'name' | 'tel' | 'email'): boolean => {
        return state.contacts.some((c) => {
          return c[info] === action.payload[info]
        })
      }

      const nomeExiste = existeInfoRepetida('name')
      const telExiste = existeInfoRepetida('tel')
      const emailExiste = existeInfoRepetida('email')

      if (nomeExiste) return alert('Esse nome já existe')
      if (telExiste) return alert('Esse telefone já existe')
      if (emailExiste) return alert('Esse email já existe')

      const ultimoContato = state.contacts[state.contacts.length - 1]

      const novoContato = {
        ...action.payload,
        id: ultimoContato ? ultimoContato.id + 1 : 1
      }

      if (!nomeExiste && !emailExiste && !telExiste) {
        state.contacts = [...state.contacts, novoContato]
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      const contactIdToBeRemoved = action.payload
      state.contacts = state.contacts.filter(
        (c) => c.id !== contactIdToBeRemoved
      )
    },
    editar: (state, action: PayloadAction<ContactProps>) => {
      const indexDoContato = state.contacts.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.contacts[indexDoContato] = action.payload
      }
    }
  }
})

export const { adicionar, remover, editar } = contactsListSlice.actions
export default contactsListSlice.reducer
