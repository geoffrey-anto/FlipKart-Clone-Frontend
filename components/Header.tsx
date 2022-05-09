import SearchBar from './SearchBar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const Header = () => {
  return (
    <div className="flex h-14 w-full flex-row items-center justify-center bg-headerBlue px-32 text-xl font-semibold italic text-white">
      <div className="relative -top-1 -right-4 ml-10 flex w-[100px] flex-col items-center justify-start text-left">
        <span className="text-[20px] font-semibold">Flipkart</span>
        <div className="text-xs italic">
          <span>Explore </span>
          <span className="font-bold text-yellow-300">Plus+</span>
        </div>
      </div>
      <SearchBar />
      <div className="flex w-[550px]">
        <div className="flex h-8 w-28 flex-row items-center justify-center bg-white text-headerBlue">
          <p className="text-[16px] not-italic">Login</p>
        </div>
        <div className="mx-4 flex w-32 flex-row items-center justify-center">
          <p className="text-[15px] not-italic">Become a Seller</p>
        </div>
        <div className="w-18 mx-4 flex flex-row items-center justify-center">
          <p className="text-[15px] not-italic">
            More <ArrowDropDownIcon className="-mr-2 text-[23px]"/>
          </p>
        </div>
        <div className="mx-4 flex w-16 flex-row items-center justify-center">
          <p className="text-[15px] not-italic">
            <ShoppingCartIcon className="mr-1 text-[20px]" />
            Cart
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
