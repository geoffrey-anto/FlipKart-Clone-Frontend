import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface Props {
  slidingPanelData: { url: string }[]
}

const SlidingPanel = (props: Props) => {
  const [curUrl, setCurUrl]: [number, Dispatch<SetStateAction<number>>] =
    useState<number>(0)
  useEffect(() => {
    // setInterval(() => {
    //   if (curUrl == props.slidingPanelData.length - 1) {
    //     setCurUrl(0)
    //   } else {
    //     setCurUrl(curUrl + 1)
    //   }
    // }, 5000)
  }, [])
  return (
    <div className='h-2/3'>
      <img className="w-full px-2 h-full" src={props.slidingPanelData[curUrl].url} />
    </div>
  )
}

export default SlidingPanel
