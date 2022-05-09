import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = () => {
  return (
    <div className="mx-10 flex h-[38px] w-[500px] bg-white items-center justify-between">
      <input
        placeholder="Search for products, brands and more"
        className="w-full cursor-text rounded-sm 
                  border-none bg-white text-sm text-gray-500 outline-none px-2"
      />
      <SearchOutlinedIcon className="cursor-pointer text-headerBlue mx-2"/>
    </div>
  )
}

export default SearchBar
