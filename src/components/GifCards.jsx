/* eslint-disable react/prop-types */

import Gif from './Gif';

const GifCards = ({ gifCards }) => {
  let randomGif;
  typeof gifCards === 'string' ? (randomGif = true) : (randomGif = false);

  return (
    <>
      <section
        className={`${
          randomGif
            ? 'grid-cols-1'
            : ' grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        } mt-10 mb-10 grid gap-y-5 gap-x-5 justify-items-center justify-between min-h-max`}
      >
        {randomGif ? (
          <Gif gifImg={gifCards} />
        ) : (
          gifCards.map((gif) => <Gif key={gif.id} gifImg={gif.id} />)
        )}
      </section>
    </>
  );
};

export default GifCards;
