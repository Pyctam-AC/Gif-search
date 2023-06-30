const Pagination = ({ gifsPerPage, totalGifs, paginate, nextPage, prevPage, currentPage }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGifs / gifsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex flex-row gap-10 justify-center mb-10">
      <button
        className="text-white text-xl hover:text-orange-500"
        onClick={prevPage}
      >
        Назад
      </button>
      {
        pageNumbers.map((number =>
          <li key={number}>
            <a
              className={`text-xl ${currentPage===number? "text-orange-500" : "text-white"} hover:text-orange-500`} href="#"
              onClick={() => paginate(number)}
            >
                {number}
            </a>
          </li>
        ))
      }
      <button
        className="text-white text-xl hover:text-orange-500"
        onClick={nextPage}
      >
        Вперёд
      </button>
    </ul>
  );
};

export default Pagination;

{
  /*   <li className="text-white text-xl hover:text-orange-500">Вперёд</li> */
  /* <li className="text-white text-xl hover:text-orange-500">Назад</li> */
  /* <button className='text-white text-xl hover:text-orange-500'>1</button> */
}
