import { CircularProgress } from '../CircularProgress'
import { useProgress } from './hooks/useProgress'

import type { FC } from 'react'

interface ProgressCardProps {
  duration?: number
  textColor?: string
  backgroundColor?: string
  onComplete?: () => void
}

export const ProgressCard: FC<ProgressCardProps> = ({
  duration = 60,
  textColor = 'white',
  backgroundColor = 'black',
  onComplete,
}) => {
  const { progress, timeLabel } = useProgress({ duration, onComplete })

  if (!duration) return

  return (
    <div
      className="flex flex-col items-center justify-center p-2 w-full h-full"
      style={{ backgroundColor, borderRadius: '12px' }}
    >
      <CircularProgress progress={progress} strokeWidth={3} />
      <p
        className="mt-auto text-xs absolute bottom-4 font-semibold "
        style={{ color: textColor }}
      >
        {timeLabel}
      </p>
    </div>
  )
}
