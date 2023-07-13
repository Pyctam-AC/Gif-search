import { Routes} from 'react-router-dom';
import Search from './Search.jsx';

import NavPage from './NavPage.jsx';
import RamdomGif from './RamdomGif.jsx';
import TrendingGifs from './TrendingGifs.jsx';

const Main = () => {
  return (
    <main className='w-100% mt-10 '>
      <Routes>
        <NavPage />
        <Routes path='/search' element={<Search />} />
        <Routes path='/random' element={<RamdomGif />} />
        <Routes path='/trending' element={<TrendingGifs />} />
      </Routes>
    </main>
  );
};

export default Main;
