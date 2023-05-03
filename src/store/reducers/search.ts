import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type SearchState = {
  termo: string
}

const initialState: SearchState = {
  termo: ''
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alterarTermo } = searchSlice.actions
export default searchSlice.reducer
