import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { search } from '../utills/api';
import GifCards from './GifCards';
import Pagination from './Pagination';

const Search = () => {
  const { register, reset, handleSubmit } = useForm({ mode: 'onBlur' });

  const [searchedGifs, setSearchedGifs] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);

  const [gifsPerPage] = useState(9);

  const lastGifIndex = currentPage * gifsPerPage;
  const firstGifIndex = lastGifIndex - gifsPerPage;
  const currentGif = searchedGifs.slice(firstGifIndex, lastGifIndex);

  const paginate = (pageNumber) => {setcurrentPage(pageNumber)};

  const nextPage = () => setcurrentPage (prev => prev + 1);
  const prevPage = () => setcurrentPage (prev => prev - 1);

  const onSubmit = (data) => {
    search(data.searchValue).then((res) => {
      setSearchedGifs(res.data);
    });
  };

  return (
    <>
      <form
        className='flex flex-row gap-5 justify-center'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register('searchValue', {
            required: { value: true, message: 'Это поле нужно заполнить' },
          })}
          type='text'
          className='min-w-[500px] p-1 h-10 bg-search-color outline-orange-500'
          placeholder='Найти GIF'
        />
        <button
          type='reset'
          className='bg-clearBtn h-10 w-10 bg-contain hover:scale-105 active:scale-95'
          onClick={reset}
        />
        <button
          type='submit'
          className='bg-searchBtn h-10 w-10 bg-contain hover:scale-105 active:scale-95'
        />
      </form>
      <GifCards gifCards={currentGif} />
      <Pagination
        gifsPerPage={gifsPerPage}
        totalGifs={searchedGifs.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
};

export default Search;
