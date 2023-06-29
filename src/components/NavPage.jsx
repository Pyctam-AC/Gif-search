import {Link} from 'react-router-dom';

const NavPage = () => {
  return (
    <nav className="flex gap-8 justify-center mb-10">
      <Link to="/" className="text-white text-xl hover:text-orange-500">
        Поиск
      </Link>
      <Link to="/trending" className="text-white text-xl hover:text-orange-500">
        Тренды
      </Link>
      <Link to="/random" className="text-white text-xl hover:text-orange-500">
        Случайный гиф
      </Link>
    </nav>
  );
};

export default NavPage;
