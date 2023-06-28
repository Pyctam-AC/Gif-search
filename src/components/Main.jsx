import Search from './Search.jsx';
import GifCards from './GifCards.jsx';
import { useEffect, useState } from 'react';

const Main = () => {

  const {inputValue, setUnputValue} = useState("");
  const {searchQuery, setSearchQuery} = useState("")

  return (
    <main className='w-100% mt-10 '>
      <Search 
        handleChange={(event) => setUnputValue(event.target.value)}
        clickSearch={() => setSearchQuery(inputValue)}
      />
      <GifCards 
        searchQuery={searchQuery}
      />
    </main>
  );
};

export default Main;
