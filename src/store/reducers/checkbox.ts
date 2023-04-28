import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CheckboxState = {
  checkboxes: {
    [id: number]: boolean
  }
}

const initialState: CheckboxState = {
  checkboxes: {}
}

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    toggleCheckbox: (state, action: PayloadAction<number>) => {
      const idDoContato = action.payload
      state.checkboxes[idDoContato] = !state.checkboxes[idDoContato]
    }
  }
})

export const { toggleCheckbox } = checkboxSlice.actions

export default checkboxSlice.reducer
