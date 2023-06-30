const Pagination = ({
  gifsPerPage,
  totalGifs,
  paginate,
  nextPage,
  prevPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGifs / gifsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='flex flex-row  gap-8 md:gap-10 justify-center mb-10'>
      <button
        className='text-white text-xl hover:text-orange-500'
        onClick={currentPage < 1 ? paginate(1) : prevPage}
      >
        {'<'}
      </button>
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            className={`text-xl ${
              currentPage === number ? 'text-orange-500' : 'text-white'
            } hover:text-orange-500`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        </li>
      ))}
      <button
        className='text-white text-xl hover:text-orange-500'
        onClick={currentPage > pageNumbers.length ? paginate(1) : nextPage}
      >
        {'>'}
      </button>
    </ul>
  );
};

export default Pagination;
