import { Route, Routes, useNavigate } from 'react-router-dom';
import Search from './Search.jsx';
import GifCards from './GifCards.jsx';
import { useEffect, useState } from 'react';
import NavPage from './NavPage.jsx';
import RamdomGif from './RamdomGif.jsx';
import TrendingGifs from './TrendingGifs.jsx';


const Main = () => {
/*   const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (serchData) => {
    setSearchQuery(serchData);
  };

  console.log(); */

  return (
    <main className='w-100% mt-10 '>
      
      <Routes>
        <NavPage />
        <Routes
          path='/'
          element={ <Search /> }
        />
        <Routes
          path='/random'
          element={ <RamdomGif /> }
        />
        <Routes
          path='/trending'
          element={ <TrendingGifs /> }
        />
      </Routes>
      {/* <Search onSearch={handleSearch} /> */}
      {/* <GifCards searchQuery={searchQuery} /> */}
    </main>
  );
};

export default Main;
