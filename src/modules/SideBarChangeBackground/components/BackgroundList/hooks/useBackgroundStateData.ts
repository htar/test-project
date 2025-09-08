import { useDispatch, useSelector } from 'react-redux'
import type { TAppDispatch, TRootState } from '@/state/types'

export const useBackgroundStateData = () => {
  const backgrounds: Array<string> = useSelector(
    (state: TRootState): Array<string> => state.background.backgrounds,
  )
  const avatarImage: string | null = useSelector(
    (state: TRootState): string | null => state.background.avatarImage,
  )
  const selectedBg: string | null = useSelector(
    (state: TRootState): string | null => state.background.defaultBg,
  )
  const dispatch = useDispatch<TAppDispatch>()

  return { backgrounds, avatarImage, selectedBg, dispatch }
}
