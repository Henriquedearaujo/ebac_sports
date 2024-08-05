import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itenss: Produto[]
}

const initialState: FavoritosState = {
  itenss: []
}

const favoritosSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    adicionarF: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itenss.find((p) => p.id === produto.id)) {
        state.itenss = state.itenss.filter((p) => p.id !== produto.id)
      } else {
        state.itenss.push(produto)
      }
    }
  }
})

export const { adicionarF } = favoritosSlice.actions
export default favoritosSlice.reducer
