import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type isEditingState = boolean

const initialState: isEditingState = false

const isEditingSlice = createSlice({
  name: 'isEditing',
  initialState,
  reducers: {
    setIsEditing: (
      state,
      action: PayloadAction<isEditingState>
    ): isEditingState => {
      state = action.payload
      return state
    }
  }
})

export const { setIsEditing } = isEditingSlice.actions
export default isEditingSlice.reducer
