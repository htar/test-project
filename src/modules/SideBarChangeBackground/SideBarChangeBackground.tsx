import { useState } from 'react'
import { SideBarBlock } from './components/SideBarBlock'
import { SideBarInfo } from './components/SideBarInfo'
import { BackgroundList } from './components/BackgroundList'
import { CloseIcon } from '@/components/icons'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import { Button } from '@/components/ui/button.tsx'

export const SideBarChangeBackground = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex h-screen items-center justify-center ">
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>Change background</Button>
        </DrawerTrigger>
        <DrawerContent className="p-4 max-w-100 overflow-x-hidden overflow-y-auto bg-white items-start flex justify-start">
          <DrawerTitle className="items-center w-full flex justify-between font-bold">
            Change background
            <DrawerClose asChild>
              <Button variant="ghost">
                <CloseIcon />
              </Button>
            </DrawerClose>
          </DrawerTitle>
          <SideBarBlock blockTitle="Background idea">
            <SideBarInfo />
          </SideBarBlock>
          <SideBarBlock blockTitle="Your backgrounds">
            <BackgroundList />
          </SideBarBlock>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
