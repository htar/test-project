import { useDispatch } from 'react-redux'
import type { TAppDispatch } from '@/state/types'
import { addBackground } from '@/state/store'
import { Button } from '@/components/ui/button.tsx'

import { RegenerateIcon } from '@/components/icons'

export const BackgroundChanger = () => {
  const dispatch = useDispatch<TAppDispatch>()

  const handleGenerate = () => {
    const newBg = `https://picsum.photos/200/300?random=${Math.random()}`
    dispatch(addBackground(newBg))
  }

  return (
    <div className=" mt-4 mb-4">
      <Button
        className="bg-black w-full text-white rounded-full h-12 "
        onClick={handleGenerate}
      >
        <RegenerateIcon />
        Generate BG for 1 credit
      </Button>
    </div>
  )
}
