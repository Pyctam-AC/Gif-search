import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { search } from '../utills/api';
import GifCards from './GifCards';

const Search = () => {
  const { register, reset, handleSubmit } = useForm({ mode: 'onBlur' });

  const [searchedGifs, setSearchedGifs] = useState([]);

  const onSubmit = (data) => {
    search(data.searchValue, 9).then((res) => {
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
          className='w-3/5 h-10 bg-search-color outline-orange-500'
          placeholder='Search GIF'
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
      <GifCards gifCards={searchedGifs} />
    </>
  );
};

export default Search;
