import { useEffect, useState } from 'react';
import GifCards from './GifCards.jsx';
import { getRandomGif } from '../utills/api';

const RamdomGif = () => {
  const [ramdomGif, setRandomGif] = useState([]);
  const [refreshedGif, setRefreshed] = useState(false);

  const handleRefreshGif = () => {
    setRefreshed(!refreshedGif);
  };

  useEffect(() => {
    getRandomGif().then((res) => {
      setRandomGif(res.data.id);
    });
  }, [refreshedGif]);

  return (
    <>
      <button
        className='bg-refreshBtn absolute m-2 z-10 h-10 w-10 bg-contain'
        onClick={handleRefreshGif}
      />
      <GifCards gifCards={ramdomGif} />
    </>
  );
};

export default RamdomGif;
