import { useEffect, useState } from 'react';
import GifCards from './GifCards.jsx';
import { trending } from '../utills/api';

const TrendingGifs = () => {
    const [trendingGifs, setTrendinGifs] = useState([]);

    useEffect(() => {
        trending(9).then((res) => {
          setTrendinGifs(res.data);
        });
    }, []);
    
    return (
        <GifCards 
            gifCards={trendingGifs}
        />
    );
  };
  
  export default TrendingGifs;