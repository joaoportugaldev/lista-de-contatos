import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../../containers/ContactBook'
import { joao, pedro, bruno } from '../../models/Contact'

type ContactsState = {
  contacts: Contact[]
}

const initialState: ContactsState = {
  contacts: [joao, pedro, bruno]
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
    }
  }
})

export const { adicionar } = contactsListSlice.actions
export default contactsListSlice.reducer
