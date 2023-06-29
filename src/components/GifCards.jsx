/* eslint-disable react/prop-types */

import Gif from './Gif';

const GifCards = ({ gifCards }) => {
  let randomGif;
  typeof gifCards === 'string' ? (randomGif = true) : (randomGif = false);

  return (
    <>
      <section
        className={`${
          randomGif ? 'grid-cols-1' : 'grid-cols-3'
        } mt-10 mb-10 grid gap-y-5 gap-x-5 justify-items-center justify-between min-h-screen`}
      >
        {randomGif ? (
          <Gif gifImg={gifCards} />
        ) : (
          gifCards.map((gif) => <Gif key={gif.id} gifImg={gif.id} />)
        )}
      </section>
      <nav className='flex flex-row gap-10 justify-center mb-10'>
        <button className='text-white text-xl hover:text-orange-500'>
          Вперёд
        </button>
        <button className='text-white text-xl hover:text-orange-500'>1</button>
        <button className='text-white text-xl hover:text-orange-500'>2</button>
        <button className='text-white text-xl hover:text-orange-500'>3</button>
        <button className='text-white text-xl hover:text-orange-500'>4</button>
        <button className='text-white text-xl hover:text-orange-500'>5</button>
        <button className='text-white text-xl hover:text-orange-500'>6</button>
        <button className='text-white text-xl hover:text-orange-500'>7</button>
        <button className='text-white text-xl hover:text-orange-500'>8</button>
        <button className='text-white text-xl hover:text-orange-500'>
          Назад
        </button>
      </nav>
    </>
  );
};

export default GifCards;
