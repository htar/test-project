import type { FC, ReactNode } from 'react'

import { DrawerHeader } from '@/components/ui/drawer.tsx'

interface ISideBarBlock {
  children: ReactNode
  blockTitle: string
}

export const SideBarBlock: FC<ISideBarBlock> = ({ blockTitle, children }) => {
  return (
    <div>
      <DrawerHeader>
        <div className="h5 font-semibold pt-2 pb-2">{blockTitle}</div>
        {children}
      </DrawerHeader>
    </div>
  )
}
