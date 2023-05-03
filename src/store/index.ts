import { configureStore } from '@reduxjs/toolkit'
import contactsListReducer from './reducers/contactsList'
import isEditingReducer from './reducers/isEditing'
import searchReducer from './reducers/search'

const store = configureStore({
  reducer: {
    contactsList: contactsListReducer,
    isEditing: isEditingReducer,
    search: searchReducer
  }
})

export default store

export type RootReducer = ReturnType<typeof store.getState>
