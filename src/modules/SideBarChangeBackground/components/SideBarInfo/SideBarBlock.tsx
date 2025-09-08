import { BackgroundChanger } from '../BackgroundChanger'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card.tsx'

import { NextIcon, PrevIcon, RegenerateIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'

export const SideBarInfo = () => {
  return (
    <>
      <Card className="border-gray-300 gap-20 shadow-none py-4">
        <CardContent className="  px-4">
          <CardDescription>
            Animate glowing rays pulsating from behind the bottle, leaves gently
            swaying, and golden sparkles floating upward for a natural, radiant
            effect.
          </CardDescription>
        </CardContent>
        <CardFooter className="items-center  px-4  flex justify-between  ">
          <CardAction className="self-center items-center flex gap-1  ">
            <RegenerateIcon />
            Regenerate
          </CardAction>
          <CardAction className=" flex gap-6  pr-4 h-6 ">
            <Button variant="ghost">
              <PrevIcon />
            </Button>
            <Button variant="ghost">
              <NextIcon />
            </Button>
          </CardAction>
        </CardFooter>
      </Card>
      <BackgroundChanger />
    </>
  )
}
