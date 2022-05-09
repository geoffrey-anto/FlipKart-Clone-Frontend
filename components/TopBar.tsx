interface ItemContainerProps{
  item: string,
  title: string,
}

export type Data = {url: string, title: string}

interface TopBarProps{
  data: Data[];
}

const ItemContainer = ({item, title}: ItemContainerProps) => {
  return(
    <div className="flex flex-col items-center justify-between h-24 my-3 cursor-pointer opacity-90 hover:opacity-100">
      <img className="w-[70px]" srcSet={item}  />
      <p className="text-sm font-medium opacity-100">{title}</p>
    </div>
  )
}

const TopBar = (props: TopBarProps) => {
  return (
    <div className="flex flex-row items-center justify-around mx-5">
      {
        props.data.map(
          (item, index) => {
            return (<ItemContainer item={item.url} key={index} title={item.title}/>)
          }
        )
      }
    </div>
  )
}

export default TopBar
