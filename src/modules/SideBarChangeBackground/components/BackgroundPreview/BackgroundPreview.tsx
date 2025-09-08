import type { FC } from 'react'

interface IBackgroundPreview {
  img: string
  avatarImage: string | null
  isDefault?: boolean
  onClick: () => void
}

export const BackgroundPreview: FC<IBackgroundPreview> = ({
  img,
  isDefault,
  onClick,
  avatarImage,
}) => {
  return (
    <div
      onClick={onClick}
      className={` rounded-xl relative rounded-lg overflow-hidden cursor-pointer border 
      ${isDefault ? 'border-primary' : 'border-transparent'}`}
      style={{
        backgroundImage: `url("${img}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '104px',
        height: '197px',
      }}
    >
      <img
        src={avatarImage || ''}
        alt="background preview"
        className="w-full h-full object-cover"
      />

      {isDefault && (
        <span className=" text-black bg-white color-black p-1 font-xs font-bold absolute top-1 left-1 text-xs  px-1 rounded">
          DEFAULT
        </span>
      )}
    </div>
  )
}
