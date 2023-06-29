/* eslint-disable react/prop-types */

import Gif from './Gif';

const GifCards = ({ gifCards }) => {
  console.log(gifCards);
  return (
    <section
      className={`${
        typeof gifCards === 'string' ? 'grid-cols-1' : 'grid-cols-3'
      } mt-10 mb-10 grid gap-y-5 gap-x-5 justify-items-center justify-between min-h-screen`}
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
