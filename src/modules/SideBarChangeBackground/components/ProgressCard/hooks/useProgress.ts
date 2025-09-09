import { useEffect, useState } from 'react'

interface useProgressProps {
  duration: number
  onComplete?: () => void
}

export const useProgress = ({
  duration,
  onComplete,
}: useProgressProps): { progress: number; timeLabel: string } => {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const interval = 100
    const step = 100 / ((duration * 1000) / interval)

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          clearInterval(timer)
          if (onComplete) onComplete()
          return 100
        }
        return prev + step
      })
    }, interval)

    return () => clearInterval(timer)
  }, [duration, onComplete])

  const getTimeLabel = ({
    progressCount,
    durationCount,
  }: {
    progressCount: number
    durationCount: number
  }): string => {
    const timeLeft = Math.ceil(((100 - progressCount) / 100) * durationCount)

    let timeLabel = ''
    if (timeLeft >= 60) {
      const minutes = Math.ceil(timeLeft / 60)
      timeLabel = `${minutes} minute${minutes > 1 ? 's' : ''} left`
    } else {
      timeLabel = `${timeLeft} second${timeLeft !== 1 ? 's' : ''} left`
    }
    return timeLabel
  }

  return {
    progress,
    timeLabel: getTimeLabel({
      progressCount: progress,
      durationCount: duration,
    }),
  }
}
