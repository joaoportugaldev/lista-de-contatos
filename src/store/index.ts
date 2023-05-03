import { configureStore } from '@reduxjs/toolkit'
import contactsListReducer from './reducers/contactsList'
import isEditingReducer from './reducers/isEditing'

const store = configureStore({
  reducer: {
    contactsList: contactsListReducer,
    isEditing: isEditingReducer
  }
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
