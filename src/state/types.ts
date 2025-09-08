import type { store } from './store.ts'

export interface IBackgroundState {
  defaultBg: string | null
  avatarImage: string | null
  backgrounds: Array<string>
}

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
