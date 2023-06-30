import { useEffect, useState } from 'react';
import GifCards from './GifCards.jsx';
import { trending } from '../utills/api';
import Pagination from './Pagination';


const TrendingGifs = () => {
  const [trendingGifs, setTrendinGifs] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);

  const [gifsPerPage] = useState(9);

  const lastGifIndex = currentPage * gifsPerPage;
  const firstGifIndex = lastGifIndex - gifsPerPage;
  const currentGif = trendingGifs.slice(firstGifIndex, lastGifIndex);

  const paginate = (pageNumber) => {setcurrentPage(pageNumber)};

  const nextPage = () => setcurrentPage (prev => prev + 1);
  const prevPage = () => setcurrentPage (prev => prev - 1);


  useEffect(() => {
    trending(9).then((res) => {
      console.log(currentPage)
      setTrendinGifs(res.data);
    });
  }, []);

  return (
    <>
      <GifCards gifCards={currentGif} />
      <Pagination
        gifsPerPage={gifsPerPage}
        totalGifs={trendingGifs.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default TrendingGifs;
