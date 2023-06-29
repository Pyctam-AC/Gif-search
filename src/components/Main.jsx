import Search from './Search.jsx';
import GifCards from './GifCards.jsx';
import { useEffect, useState } from 'react';

const Main = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (serchData) => {
    setSearchQuery(serchData);
  };

  console.log();

  return (
    <main className='w-100% mt-10 '>
      <Search onSearch={handleSearch} />
      <GifCards searchQuery={searchQuery} />
    </main>
  );
};

export default Main;
