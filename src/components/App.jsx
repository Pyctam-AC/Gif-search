import { Route, Routes} from 'react-router-dom';
import Header from './Header.jsx';
//import Main from './Main.jsx';
import Footer from './Footer.jsx';
import NavPage from './NavPage.jsx';
import RamdomGif from './RamdomGif.jsx';
import TrendingGifs from './TrendingGifs.jsx';
import Search from './Search.jsx';

const App = () => {

  return (
    <div className=' min-h-screen flex flex-col items-center bg-neutral-800'>
      <Header />
      <main className='w-100% mt-10 '>
        <NavPage />
        <Routes>
          <Route path='/search' element={<Search />} />
          <Route path='/random' element={<RamdomGif />} />
          <Route path='/trending' element={<TrendingGifs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
