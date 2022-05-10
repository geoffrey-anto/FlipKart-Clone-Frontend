import React, { useEffect, useState } from 'react'
import { displayItems, urlFor } from '../pages'


interface Props {
  value: displayItems
}

interface cardProps {
  data: {
    _key: string
    _type: string
    description: string
    name: string
    price: number
    offer: number
    slug: string
    image_preview: {
      _type: string
      asset: {
        _ref: string
        _type: string
      }
    }
  },
  count: number
}

function Card({ data, count }: cardProps) {
  const [style, setStyle] = useState("mx-3 flex h-fit w-[2000px] flex-row items-center justify-around bg-white py-3 2xl:w-full");
  useEffect(() => {
    console.log(count)
    if(count < 5){
      setStyle("mx-3 flex h-fit w-full flex-row items-center justify-around bg-white py-3 2xl:w-full")
    }
  }, [data])
  return (
    <div className={style}>
      <div className="h-auto w-48 bg-white flex flex-col items-center justify-around">
        <img className='w-2/3 h-3/4' src={urlFor(data.image_preview).url()}/>
        <p className='text-md font-semibold text-ellipsis overflow-hidden line-clamp-1 py-2 pt-5'>{data.name}</p>
        <p className='text-md font-semibold text-ellipsis overflow-hidden line-clamp-1 text-textGreen'>{data.price}{" "}{data.offer}</p>
        <p className='text-md font-light text-ellipsis overflow-hidden line-clamp-1 py-2'>{data.description}</p>
      </div>
    </div>
  )
}

function ItemsSection({ value }: Props) {
  return (
    <div className="h-fit w-full ">
      <p className="my-3 pl-5 text-2xl font-semibold">{value.name}</p>
      <div className="pl-2 overflow-x-scroll flex flex-row">
        {value.content.map((item, index) => {
          console.log(item)
          return <Card key={index} data={item} count={value.content.length}/>
        })}
      </div>
    </div>
  )
}

export default ItemsSection
