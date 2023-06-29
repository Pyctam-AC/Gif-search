/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { trending, search, random } from '../utills/api';

import Gif from './Gif';

const GifCards = ({ gifCards }) => {
  /*   const [trendingGifs, setTrendinGifs] = useState([]);
  const [searchedGifs, serSearchedGifs] = useState([]);
  const [ramdomGif, setRandomGif] = useState([]);

  useEffect(() => {
    trending(9).then((res) => {
      setTrendinGifs(res.data);
    });
  }, []);

  useEffect(() => {
    if (props.searchQuery) {
      search(props.searchQuery.searchValue, 9).then((res) => {
        serSearchedGifs(res.data);
      });
    }
  }, [props.searchQuery]);

  useEffect(() => {
    random().then((res) => {
      setRandomGif(res.data);
    });
  }, []); */

  return (
    <section
      className={`${
        typeof gifCards === 'string' ? 'grid-cols-1' : 'grid-cols-3'
      } mt-10 mb-10 grid grid-cols-3 gap-y-5 gap-x-5 justify-items-center justify-between min-h-screen`}
    >
      {typeof gifCards === 'string' ? (
        <Gif gifImg={gifCards} />
      ) : (
        gifCards.map((gif) => <Gif key={gif.id} gifImg={gif.id} />)
      )}
    </section>
  );
};

export default GifCards;

/* {props.searchQuery
        ? searchedGifs.map((gif) => <Gif key={gif.id} gifImg={gif.id} />)
        : trendingGifs.map((gif) => <Gif key={gif.id} gifImg={gif.id} />)} */
