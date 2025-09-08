import { BackgroundPreview } from '../BackgroundPreview'
import { useBackgroundStateData } from './hooks/useBackgroundStateData.ts'
import { setDefaultBg } from '@/state/store'

export const BackgroundList = () => {
  const { backgrounds, avatarImage, selectedBg, dispatch } =
    useBackgroundStateData()
  const isBackgrounds = Boolean(backgrounds)

  return (
    <div className="grid grid-cols-3 gap-4 ">
      {isBackgrounds &&
        backgrounds.map((bg: string) => (
          <BackgroundPreview
            key={bg}
            img={bg}
            avatarImage={avatarImage}
            isDefault={selectedBg === bg}
            onClick={() => dispatch(setDefaultBg(bg))}
          />
        ))}
    </div>
  )
}
