import clearBtn from '../images/ClearBtn.png'
import SearchBtn from '../images/SearchBtn.png'

const Search = () => {
    return (
      <div className="flex flex-row gap-5 w-screen justify-center">
        <input type="text" className='w-2/5 h-10 bg-search-color outline-orange-500' />
        <button className='bg-clearBtn h-10 w-10 bg-contain'></button>
        <button className='bg-searchBtn h-10 w-10 bg-contain'></button>
      </div>
    )
  }
  
export default Search;
