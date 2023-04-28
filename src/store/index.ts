import { configureStore } from '@reduxjs/toolkit'
import contactsListReducer from './reducers/contactsList'
import checkboxReducer from './reducers/checkbox'

const store = configureStore({
  reducer: {
    contactsList: contactsListReducer,
    checkbox: checkboxReducer
  }
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
