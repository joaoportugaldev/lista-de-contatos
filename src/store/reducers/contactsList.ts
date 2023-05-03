import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../../components/Contact'

type ContactsState = {
  contacts: Contact[]
}

const initialState: ContactsState = {
  contacts: [
    {
      id: 1,
      name: 'joao',
      email: 'joaosportugal@hotmail.com',
      tel: '21989434454'
    },
    {
      id: 2,
      name: 'bruno',
      email: 'brunoreis@hotmail.com',
      tel: '61098419842'
    },
    {
      id: 3,
      name: 'pedro',
      email: 'pedromenescal@hotmail.com',
      tel: '21984219433'
    }
  ]
}

const contactsListSlice = createSlice({
  name: 'contactsList',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Contact>) => {
      const novoContato = action.payload
      const contactsInitialState = state.contacts
      if (state.contacts.find((c) => c.id === novoContato.id)) {
        alert('Esse contato já existe')
      } else {
        state.contacts = [...contactsInitialState, novoContato]
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      const contactIdToBeRemoved = action.payload
      state.contacts = state.contacts.filter(
        (c) => c.id !== contactIdToBeRemoved
      )
    },
    editar: (state, action: PayloadAction<Contact>) => {
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
