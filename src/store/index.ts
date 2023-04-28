import { configureStore } from '@reduxjs/toolkit'
import contactsListReducer from './reducers/contactsList'

const store = configureStore({
  reducer: {
    contactsList: contactsListReducer
  }
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
