import { useEffect, useState } from 'react';


const Search = ({ handleChange, clickSearch, clickReset }) => {
  return (
    <div className='flex flex-row gap-5 justify-center'>
      <input
        type='text'
        className='w-3/5 h-10 bg-search-color outline-orange-500'
        placeholder="Search GIF"
        onChange={handleChange}
      />
      <button
        type='button'
        className='bg-clearBtn h-10 w-10 bg-contain hover:scale-105 active:scale-95'
        onClick={clickReset}
      >
      </button>
      <button 
        type='submit'
        className='bg-searchBtn h-10 w-10 bg-contain hover:scale-105 active:scale-95'
        onClick={clickSearch}
      >

      </button>
    </div>
  );
};

export default Search;
