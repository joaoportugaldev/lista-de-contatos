import { configureStore } from '@reduxjs/toolkit'
import contactsListReducer from './reducers/contactsList'
import checkboxReducer from './reducers/checkbox'
import isEditingReducer from './reducers/isEditing'

const store = configureStore({
  reducer: {
    contactsList: contactsListReducer,
    checkbox: checkboxReducer,
    isEditing: isEditingReducer
  }
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
