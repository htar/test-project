import { configureStore, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IBackgroundState } from './types'

/* ---------------- SLICE ---------------- */

const initialState: IBackgroundState = {
  defaultBg: null,
  avatarImage: window.location.origin + '/avatar.png',
  backgrounds: [
    'https://picsum.photos/200/300?1',
    'https://picsum.photos/200/300?2',
    'https://picsum.photos/200/300?3',
  ],
}

export const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers: {
    setDefaultBg: (state, action: PayloadAction<string>) => {
      state.defaultBg = action.payload
    },
    setAvatarImage: (state, action: PayloadAction<string>) => {
      state.avatarImage = action.payload
    },
    addBackground: (state, action: PayloadAction<string>) => {
      state.backgrounds.push(action.payload)
    },
  },
  selectors: {
    getBackgrounds: (
      state: IBackgroundState,
    ): IBackgroundState['backgrounds'] => state.backgrounds,
    getAvatarImage(state: IBackgroundState): IBackgroundState['avatarImage'] {
      return state.avatarImage
    },
  },
})

/* ---------------- STORE ---------------- */
export const store = configureStore({
  reducer: {
    background: backgroundSlice.reducer,
  },
})

export const { setDefaultBg, setAvatarImage, addBackground } =
  backgroundSlice.actions
