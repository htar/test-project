import React from 'react'

interface CircularProgressProps {
  size?: number
  progress: number
  textColor?: string
  progressColor?: string
  trackColor?: string
  strokeWidth: number
  backgroundColor?: string
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 65,
  strokeWidth,
  progressColor = 'limegreen',
  trackColor = 'gray',
  textColor = 'white',
  progress,
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference
  const progressLabel = Math.round(progress)

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        className="absolute top-0 left-0 -rotate-90"
        width={size}
        height={size}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={trackColor}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={progressColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.3s linear' }}
        />
      </svg>
      <span className="text-[14px] font-semibold" style={{ color: textColor }}>
        {progressLabel}%
      </span>
    </div>
  )
}
